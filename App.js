import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen'
import About from './src/screens/About'
import { StackNavigator } from 'react-navigation';

const RootStack = StackNavigator({
  About: {
    screen: About
  },
  Home: {
    screen: HomeScreen,
  },
}, {
  initialRouteName: 'Home',
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },
});
