'use strict';

import React from 'react-native';
import AppContainer from './app/containers';

var {
  AppRegistry
} = React;

AppRegistry.registerComponent('ReduxRouter', () => AppContainer);

// TBD: hiding warnings since react-native-router-redux is using a deprecated StatusBar API (fork to fix ?)
//console.ignoredYellowBox = ['Warning: StatusBarIOS.setHidden'];
console.disableYellowBox = true;
