pipeline {
    agent none

    // Build input parameters. You can set sane default values for specific
    // projects when creating an actual build
    parameters {
        choice(name: 'APP_TO_BUILD', choices: "both\nandroid\nios\nsonar", description: 'Build Android or iOS or Both or Only Sonar run')
        string(name: 'BRANCH', defaultValue: 'develop', description: 'Branch to build')

        string(name: 'VERSION_NUMBER', description: 'Version String')
        string(name: 'APP_NAME', description: 'Name to assign to application')
        string(name: 'APP_VERSION_CODE', defaultValue: '0', description: 'Application Version Code')

        string(name: 'NOTIFICATION_EMAILS', description: 'Email ids to send notifications')
    }

    // Configuration is taken from the environment. This sets the required
    // environment variables. Some come from build parameters. Some property
    // values can be stored securely on Jenkins and set using `credentials(key)`
    // such as for things like Urban Airship. **Note:** These will ultimately
    // be exposed in the app code.
    environment {
        APP_TO_BUILD = "${params.APP_TO_BUILD}"
        VERSION_NUMBER = "${params.VERSION_NUMBER}"
        APP_VERSION_CODE = "${params.APP_VERSION_CODE}"

        // These are typically always required. Fill in with appropriate
        // credential keys
        HOCKEY_APP_TOKEN = credentials()
        HOCKEY_ANDROID_APP_ID = credentials()
        HOCKEY_IOS_APP_ID = credentials()
        KEY_CHAIN_PASSWORD = credentials()

        // ***NOTE:*** These may be build machine-dependant and either not
        // needed or needing different values
        DEVELOPER_DIR = "/Applications/${params.Xcode}.app/Contents/Developer"
        PATH = "/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin"
    }
    stages {
        stage('Build') {
            failFast true
            parallel {
                stage('Build Android') {
                    when {
                        beforeAgent true
                        anyOf {
                            environment name: 'APP_TO_BUILD', value: 'android';
                            environment name: 'APP_TO_BUILD', value: 'both'
                        }
                    }
                    agent {
                        // Update if needed
                        label "AndroidBuildSlave"
                    }
                    steps {
                        sh 'env'
                        // credentialsId: and url: must also be set
                        git branch: "${params.BRANCH}"
                        echo 'Android: Starting Install'
                        sh 'yarn install'
                        dir('android') {
                            echo "Android: Starting Build"
                            sh './gradlew clean assembleRelease -PVERSION_STRING="$VERSION_STRING" -PAPP_NAME="$APP_NAME" -PBUILD_NUMBER=${BUILD_NUMBER} -PVERSION_CODE="$APP_VERSION_CODE"'
                        }
                    }
                    post {
                        success {
                            echo 'Upload to Hocky'
                            step([
                                $class        : 'HockeyappRecorder',
                                applications  :
                                [
                                    [
                                        apiToken          : HOCKEY_APP_TOKEN,
                                        downloadAllowed   : true,
                                        filePath          : '**/*.apk',
                                        mandatory         : false,
                                        notifyTeam        : true,
                                        releaseNotesMethod: [$class: 'ChangelogReleaseNotes'],
                                        uploadMethod      : [$class: 'VersionCreation', appId: HOCKEY_ANDROID_APP_ID]
                                    ]
                                ],
                                debugMode     : false,
                                failGracefully: false
                            ])
                            cleanWs()
                        }
                        failure {
                            emailext body: '$APP_NAME Build ${BUILD_NUMBER} Failed for Android', subject: '$APP_NAME Jenkins: Build ${BUILD_NUMBER}', to: '${NOTIFICATION_EMAILS}', attachLog: true, compressLog: true
                            cleanWs()
                        }
                    }
                }
                stage('Build iOS') {
                    when {
                        beforeAgent true
                        anyOf {
                            environment name: 'APP_TO_BUILD', value: 'ios';
                            environment name: 'APP_TO_BUILD', value: 'both'
                        }
                    }
                    agent {
                        // Update if needed
                        label "ios"
                    }
                    steps {
                        sh 'env'
                        // credentialsId and url must also be set
                        git branch: "${params.BRANCH}"
                        echo 'iOS: Setup iOS Env. variables'
                        sh '/usr/bin/security list-keychains -s /Users/jenkins_slave/Library/Keychains/login.keychain'
                        sh '/usr/bin/security default-keychain -d user -s /Users/jenkins_slave/Library/Keychains/login.keychain'
                        sh '/usr/bin/security unlock-keychain -p $KEY_CHAIN_PASSWORD /Users/jenkins_slave/Library/Keychains/login.keychain'
                        sh '/usr/libexec/PlistBuddy -c "Set :CFBundleVersion \"${BUILD_NUMBER}\"" "ios/Wawa/Info.plist"'
                        sh '/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString \"$VERSION_STRING\"" "ios/Wawa/Info.plist"'
                        echo 'iOS: Starting Install'
                        sh 'yarn install'
                        dir('ios') {
                            echo 'iOS: Starting Build'
                            // Installing Cocoa Pods is very common for builds
                            // Uncomment once you are using them
                            // sh 'pod install'

                            // -workspace/-project and -scheme need to be set as well
                            sh 'xcodebuild -configuration Release -archivePath $APP_NAME.xcarchive clean archive'
                            sh 'xcodebuild -exportArchive -archivePath $APP_NAME.xcarchive -exportOptionsPlist exportOptions.plist -exportPath .'
                        }
                    }
                    post {
                        success {
                            echo 'Upload to Hocky'
                            step([
                                $class        : 'HockeyappRecorder',
                                applications  :
                                [
                                    [
                                        apiToken          : HOCKEY_APP_TOKEN,
                                        downloadAllowed   : true,
                                        filePath          : '**/*.ipa',
                                        mandatory         : false,
                                        notifyTeam        : true,
                                        releaseNotesMethod: [$class: 'ChangelogReleaseNotes'],
                                        uploadMethod      : [$class: 'VersionCreation', appId: HOCKEY_IOS_APP_ID]
                                    ]
                                ],
                                debugMode     : false,
                                failGracefully: false
                            ])
                            cleanWs()
                        }
                        failure {
                            emailext body: '$APP_NAME Build ${BUILD_NUMBER} Failed for iOS', subject: '$APP_NAME Jenkins: Build ${BUILD_NUMBER}', to: '${NOTIFICATION_EMAILS}', attachLog: true, compressLog: true
                            cleanWs()
                        }
                    }
                }
            }
        }
        stage('SonarQube analysis') {
            agent any
            when {
                beforeAgent true
                anyOf {
                    environment name: 'APP_TO_BUILD', value: 'ios'
                    environment name: 'APP_TO_BUILD', value: 'both'
                    environment name: 'APP_TO_BUILD', value: 'android'
                    environment name: 'APP_TO_BUILD', value: 'sonar'
                }
            }
            environment {
                SONAR_HOME = tool name: 'Mob SonarQube Scanner Server', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
            }
            steps {
                echo 'Running Sonar'
                // credentialsId: and url: must also be set
                git branch: "${params.BRANCH}"
                sh 'yarn install'
                echo 'Unit Test'
                sh 'yarn test --ci --no-cache --coverage'
                withSonarQubeEnv('WawaSonarQube') {
                    sh 'env'
                    sh '${SONAR_HOME}/bin/sonar-scanner'
                }
            }
            post {
                success {
                    emailext body: '$APP_NAME Build ${BUILD_NUMBER} Completed Successfully', subject: '$APP_NAME Jenkins: Build ${BUILD_NUMBER}', to: '${NOTIFICATION_EMAILS}'
                }
                failure {
                    emailext body: '$APP_NAME Build ${BUILD_NUMBER} Failed', subject: '$APP_NAME Jenkins: Mobile 4.x Build ${BUILD_NUMBER}', to: '${NOTIFICATION_EMAILS}', attachLog: true, compressLog: true
                }
                always {
                    cleanWs()
                }
            }
        }
    }
}
