# Building
Developing using the local server is highly recommended. If you need to test on
real devices or create a build you will not necessarily be able to use live
reloading or hot reloading to assist you.

These builds steps will also work to create builds for qa, release, etc.

First, make sure that all environment variables needed for the build are
properly set. This will minimally include:

* `BUNDLE_ID`
* `VERSION_NUMBER`
* `BUILD_NUMBER`
* `APP_NAME`

Next, remove any currently existing dependencies and build artifacts. In many
cases you may not have to do this, but if you want a guarnateed clean install
or you plan to build an App Store or Play Store release, you should do this. For
CI this will happen automatically since you should be using a clean workspace
for each build.

```sh
rm -rf node_modules \
  ios/build \
  ios/Pods \
  android/build
```

**Next** Install dependencies via `yarn install`. Now you are ready to build
for individual platforms.

## iOS
iOS automatically creates a release bundle used by the app when it's built for
release, so you don't have to bundle manually.

**Note:** if you are using Cocoa Pods, you must install them before creating
the build. You can do this for example via `cd ios && pod install`.

Refer to the [Ionic documentation](https://github.com/Mobiquity/ionic-boilerplate/blob/master/doc/building.md#creating-the-archive)
for creating the iOS archive and .ipa since the process is identical for React
Native and Ionic at this point.

## Android
Android works a bit differently depending upon whether you're building for
debug or release.

### Debug
Android does not automatically create a JavaScript bundle for debug, so you
must have your development server running to serve the bundle (`react-native
start`).

```sh
cd android
./gradlew assembleDebug
```

This will create `android-debug.apk` in `android/app/build/outputs/apk` which
you can install on an app or emulator.

If you have an emulator running, you can also do `./gradlew installDebug` to
install it to the emulator immediately (`react-native run-android` does this).

### Release
First, set whatever environment variables you need for the build.

In the `android/` directory, `./gradlew assembleRelease` will automatically
build the JavaScript bundle and create the unsigned apk for you in
`android/app/build/outputs/apk`.

**Note:** The `bundleJsAndAssets` build step will only run if the source or
assets have changed. If you only want to change configuration but create a new
build, run `./gradlew clean` first.

## CI / Jenkins
Refer to the [Ionic documentation](https://github.com/Mobiquity/ionic-boilerplate/blob/master/doc/building.md#ci--jenkins)
on CI using this [Jenkinsfile](../Jenkinsfile) as a reference. Note that
`exportOptions.plist` is in the `ios/` directory.

## Common Credentials, and Managing Environment Variables and Configuration Files
Refer to the [Ionic documentation](https://github.com/Mobiquity/ionic-boilerplate/blob/master/doc/building.md#common-credentials).
