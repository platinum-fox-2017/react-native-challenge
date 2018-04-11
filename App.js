console.disableYellowBox = true;
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './src/components/Home';
import About from './src/components/About';
import Detail from './src/components/Detail';

import store from './src/store/index';

const StackNavHome = StackNavigator({
  Home: {
    screen: Home
  },
  Detail: {
    screen: Detail
  }
}, { initialRouteName: 'Home' });

const StackNavAbout = StackNavigator({
  About: {
    screen: About
  }
}, { initialRouteName: 'About' });

const RootNav = TabNavigator({
  Home: {
    screen: StackNavHome,
    navigationOptions: {
      title: 'Home',
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => <Icon name={'home'} size={30} color={tintColor} />
    }
  },
  About: {
    screen: StackNavAbout,
    navigationOptions: {
      title: 'About',
      tabBarLabel: 'About',
      tabBarIcon: ({tintColor}) => <Icon name={'question-circle'} size={30} color={tintColor} />
    }
  }
}, {
  headerMode: 'none',
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#222',
    showIcon: true,
    labelStyle: {
      fontSize: 8
    },
    style: {
      backgroundColor: '#d8d8d8'
    }
  }
})

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNav />
      </Provider>
    );
  }
}
