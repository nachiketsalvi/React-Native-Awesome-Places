# Development Standards
You should follow standards for testing and code formatting while you develop.
Also keep [directory structure and filenames](fs-structure.md) in mind.

## Unit Testing
Testing is done using the [jest framework](https://facebook.github.io/jest/docs/en/using-matchers.html).

Write unit tests relative to the files they are testing in corresponding
`__tests__` directories (per jest standards). A working sample is given in
`src/__tests__/Home.test.tsx`. You should be able to create any
`__tests__/*.test.tsx` files and they will be picked up by jest.

`yarn test` will run the unit tests. You can also use `yarn test --coverage`
to generate a coverage report in the `coverage/` directory.

You may want to keep the tests running via `yarn jest --watch` /
`yarn jest --watchAll` as you develop or use a tool with your editor to do
something similar, particularly while developing the tests themselves.

You should run `yarn test` before creating a pull request.

Make sure you read and understand the [Mobiquity General Unit Testing Guidelines](https://mobiquity.jira.com/wiki/spaces/MW/pages/21201492/General+Unit+Testing+Guidelines).

## Formatting
Formatting is handled by [`prettier`](https://github.com/prettier/prettier).
`prettier` will run automatically on `git commit` to format all files.

You should add a prettier plugin for your editor so you can see the changes
ahead of time. This is not strictly necessary, but will help normalize the
output files and your changes as you develop.

## Linting
`yarn lint` will run the linter. Linting is also run at commit time, and any
automatic fixes are applied. If there are linter errors, the commit will fail.
It is recommended that you run the linter before committing.

You should add a TypeScript and tslint plugin to your editor so you can catch
any errors in real time.

## Bypassing Commit Hooks
Don't do this. Ask a project lead if you feel that it's necessary.
