/**
 * This represents a simple screen-level container component with rendering
 * and styling that is hooked up to the redux store.
 */

import * as React from 'react';
import { connect } from 'react-redux';

import { StyleSheet, ViewStyle, View, Text, TextStyle } from 'react-native';

// Export component without provider for testing purposes
export class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textContent}>Edit or remove this file.</Text>
      </View>
    );
  }
}

// Connected component is used with Redux store
export const HomeScreen = connect()(Home);

// This helps auto-completion / type safety with `StyleSheet.create`
interface Style {
  container: ViewStyle;
  textContent: TextStyle;
}

// TypeScript hoists variables. We declare the styles here to keep them out of
// the way of the component definition
const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  textContent: {
    fontSize: 25,
    textAlign: 'center',
  },
});
