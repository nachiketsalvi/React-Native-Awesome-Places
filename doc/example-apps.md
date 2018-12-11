# Base App
The `master` branch includes a base for an app that can be built off of for
most projects. It includes base project dependencies and a file structure. It
already supports using core Mobiquity-recommended dependencies with hot
reloading and [react-native-debugger](https://github.com/jhen0409/react-native-debugger)
support.

Some modifications to existing files will be required for new projects:

1. `App.ts` will need to be modified to set up the navigation scheme for the app.
2. `Home.tsx` should be edited or removed. `HomeScreen.js` may also be impacted
 depending upon whether you have a screen in your app called "Home."
    * `__tests__/Home.test.tsx` should be similarly updated.
3. `Store.ts` should be updated to import all reducers and epics to build the
 state management store for the app. Any modifications to special handling for
 dev tools will be made here as well.
4. Update the README to pertain to your project. Remove the `doc` directory or
 use it for documentation specific to the project.

## Example App
**Check out the `example` git branch to see the example app.**

This branch comprises an example app with distinct functionality.

This lays out the intended project structure including screens, view components,
actions, reducers, data models, epics (for Redux Observable) / side effects,
tests, etc.

The example app also has the recommended default dependencies with examples of
how to use them.

You can build off of the example app, but it's recommended to build off of the
`master` branch app instead since it requires fewer modifications. Most of the
example app functionality won't apply to what you are building, but it should
be a good reference.
