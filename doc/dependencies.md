# Dependencies
This boilerplate project is built with recommended dependencies for Mobiquity
React Native app development. *Using these dependencies is highly recommended
and has the most support*. Don't use an alternative unless you have a good
reason that's been approved by the team.

We are totally open to suggestions for superior alternatives to any core
dependencies, and we'll keep this repo up-to-date with our recommendations.

* react + react-native -- core dependencies
* react-navigation -- navigation
  * **Note:** react-native-navigation is also an option and may be preferred in
    cases where navigation does not need a lot of customization or a true
    native navigation experience is preferred. See the react-native-navigation
    branch for an example implementation.
* redux + react-redux -- state management
* redux-observable + rxjs -- side effects

**This list will probably also include `react-native-elements` which has not
been fully analyzed yet**.

## Dev Dependencies
These are dependencies used for development only and do not apply to the
production app.

* @types/(various) -- http://definitelytyped.org/
* babel + react-native-typescript-transformer -- used for transformations when bundling the app
* lint-staged + husky -- commit hooks (formatting and linting on build)
* jest + ts-jest + react-test-renderer -- testing
* prettier -- code formatting
* typescript + tslint + ts-config-mobiquity-react-native -- type safety and linting
* redux-immutable-state-invariant -- helps enforce state immutability during development

*You can also globally install the `react-native-cli`, but it's not necessary
and you can use `yarn react-native` relative to this project instead. This
documentation will refer to all commands run using the _command_ name. If you
don't have the command globally installed, `yarn <command>` or `npx <command>`
should do the same thing in most cases.*

*For Example, if you don't have `react-native` on your path and the docs tell
you to run the command `react-native start`, you can use
`yarn react-native start`.*

*In some cases, `yarn` _is_ the base command and the docs will say something
like `yarn install`.*
