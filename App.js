import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MatchMaker from './src/screens/MatchMaker';
import About from './src/screens/About';
import { StackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return ( <RootStack /> )
  }
}

const RootStack = StackNavigator({
  Home: {
    screen: MatchMaker
  },
  About: {
    screen: About
  }
},{
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#d32f2f'
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }
})

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headline: {
    fontSize: 32,
  }
});
