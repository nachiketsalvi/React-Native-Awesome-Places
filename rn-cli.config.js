/**
 * React Native CLI configuration and setup.
 *
 * This allows us to hook into the bundle process.
 */
const blacklist = require('metro/src/blacklist');

/*
 * react-native-typescript-transformer allows us to specify the TypeScript
 * configuration file we use. Other tools such as tsserver only use
 * tsconfig.json. In particular this breaks project-relative importing for tests
 * and has other implications. The suggested approach is to use tsconfig.json
 * for development and have a configuration specifically for build as
 * we do here.
 */
process.env.TSCONFIG_PATH = 'tsconfig.build.json';

module.exports = {
  // Use TypeScript with React Native
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer')
  },
  getSourceExts() {
    return ['ts', 'tsx'];
  },

  // This fixes issues when trying to import some modules such as
  // See: https://github.com/facebook/react-native/issues/17610
  // TODO remove this once the issue is fixed (RN 54?)
  getBlacklistRE() {
    return blacklist([/react-native\/local-cli\/core\/__fixtures__.*/])
  },
}
