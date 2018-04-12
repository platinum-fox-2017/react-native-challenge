import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/index'
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen'
import About from './src/screens/About'
import WeatherScreen from './src/screens/WeatherScreen'
import { StackNavigator } from 'react-navigation';

const RootStack = StackNavigator({
  About: {
    screen: About
  },
  Home: {
    screen: HomeScreen,
  },
  WeatherDetail: {
    screen: WeatherScreen
  },
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },
});
