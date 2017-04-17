/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App, { MESSAGE } from './components/app';

export default class example extends Component {
  render() {
      console.log("*** Testing ***")
    return ( <App />);
  }
}




AppRegistry.registerComponent('example', () => example);
