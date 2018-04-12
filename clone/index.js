import React, { Component } from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux'
import store from './store/store'

class Cloner extends React.Component{
  render () {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('clone', () => Cloner);
