import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Screens/Home.Screens.js'
import Question from './src/Screens/Question.Screens.js'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import store from './store/index.js'

const RootStack = StackNavigator (
  {
    Home: {
      screen: Home
    },
    Question: {
      screen: Question
    }
  },
  {
    initialRouteName: 'Home'
  }
)


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>);
  }
}
