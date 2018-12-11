# Setup
You can create a base project by cloning this repository or by using
`react-native init` and copying over and rewriting the relevant content / files
that you need.

Cloning and working from the boilerplate is recommended at this time.

**_Beware of copy/pasted code! You should review and code you are copying as if
it were written from scatch._**

**Make sure that you remove the `.git` directory for app if you clone it and
start fresh with `git init`**.

See [the example apps documentation](example-apps.md) for more information.

## Installation
Requirements:
* `yarn` v1
* `node` v9

---

Once you have your base project set up, run `yarn install`.

Now run `npx react-native-rename $PROJECT_NAME -b $BUNDLE_ID`. You will be
prompted for the app name, bundle identifier, and other information that needs
to be changed from the boilerplate.
See: https://github.com/junedomingo/react-native-rename

Finally, don't forget to update README.md for your project and either remove
this `doc` directory or co-opt it for project-specific documentation.

You're now ready to start working on your new project!
