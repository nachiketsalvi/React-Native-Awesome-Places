import 'react-native';
import * as React from 'react';

// Note: test renderer must be required after react-native.
import { create } from 'react-test-renderer';

import { Home } from '../HomeScreen';

// Using `create` from `react-test-renderer`, it is possible to convert
// the rendered element into a JSON object as shown below. Using that
// object is a simple way to test a rendered component.

it('renders correctly', () => {
  const tree = create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

// Since `Home` is just a class, it can be tested like any other
// class without the need to render.
it('should not have any props', () => {
  const home = new Home({});
  expect(Object.keys(home.props).length).toEqual(0);
});
