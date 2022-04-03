/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import CounterApp from "./index";

test('renders correctly', () => {
  const tree = renderer.create(<CounterApp />).toJSON();
  expect(tree).toMatchSnapshot();
});
