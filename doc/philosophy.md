# Philosophy
> *Why `yarn` over `npm`?*

The tools are very similar and can probably used interchangeably in a lot of
cases -- at least for local development. `yarn` offers some advantages over
`npm`.

1. `yarn` is faster (although less-so with the latest `npm`).
2. `yarn.lock` offers more consistency than `package-lock.json`
   * It also avoids an annoying <kbd>tab</kbd> completion conflict with `package.json`
3. Most React / Facebook tools, libraries, and documentation prefer yarn or
 use it exclusively.
   * `yarn` is a Facebook tool.
4. `yarn` has a simpler / more straightforward mechanism for adding and managing
 dependencies and for running scripts.

> *Why aren't there more `package.json#scripts` such as `yarn start`?*

Understanding how to use a tool properly for development is important. The lack
of setup scripts encourages developers to look up the documentation of the tool
they want to use so they can set the options they need for the specific task
they're trying to do.

In a lot of cases, scripts don't offer much additional help. So if we had
`"start": "react-native start"` all that would do is allow us to run `yarn start`
instead of `yarn react-native start`. The latter is more meaningful.

Exceptions: Sometimes it is useful to have scripts when we want to force particular
behavior. Examples are `yarn test` and `yarn lint` where we want to enforce
proper type checking and linting of all required files in addition to some base
behavior. These scripts are also more complex.

> *Why not use a [sock drawer](http://cliffmeyers.com/blog/2013/4/21/code-organization-angularjs-javascript)
 directory structure?*

Often project files are organized into file type with directories such as
`components`, `services`, `pages`, etc. This style makes it easy to figure out
where a file should go when you are writing it, but it provides very little
useful information when reading / searching / altering / refactoring. Not only
that, but with this structure app functionality is not stored together so you
may have `src/components/account/login/form/Password.tsx` and
`src/services/account/login/form/password-check.ts` that have an interdependency
in terms of functionality are in completely different places in the file system.

Since code should be optimized for reading rather than writing, we discard the
benefit of knowing where a file should be placed in the structure immediately.
Instead, we embrace organizing files by functionality and keeping files with
like functionality together. We might have
`src/account/login/{Password.tsx,password-check.ts}`. Figuring out what to name
files and where to place them is more difficult and may require periodic
rethinking and refactoring. This up front additional effort provides more
benefit to maintaining the project than reducing up front effort using sock
drawer organization.

`common` is something of an exception and applies to functionality that is so
broad it applies to essentially all areas of the app. Updates to `common` should
be done with more care because of their possible impact.
