// Entry point for the app. You can also use `index.ios.js` and
// `index.android.js` if you need unique startup behavior for the two apps.
// This *must* be a .js file even though we are using TypeScript for the source.
import React from 'react';
import { View, Text, AppRegistry } from 'react-native';

import App from './src/App';

AppRegistry.registerComponent('test', () => App);
