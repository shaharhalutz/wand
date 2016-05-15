import React, { Component,View } from 'react-native';
import { Provider } from 'react-redux';

//import * as reducers from '../reducers';
import Application from './application';

import createStore from '../createStore'
const store = createStore();


export default class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    );
  }
}
