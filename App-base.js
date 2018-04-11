import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Main from './src/screens/Main'
import Listing from './src/screens/Listing'
import About from './src/screens/About'

const RootStack = StackNavigator(
  {
    MainScreen: {
      screen: Main,
    },
  }
)

export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
