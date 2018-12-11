/**
 * Custom babel configuration for tests. This excludes the environment variable
 * transformation settings which will create environment-agnostic snapshots.
 *
 * Some projects may render components differently depending upon environment
 * configuration. This transformer tries to take that out of the equation.
 */

module.exports = require('babel-jest').createTransformer({
  presets: ["react-native"],
  babelrc: false,
});

