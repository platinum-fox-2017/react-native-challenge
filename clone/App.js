import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store/store'
import { StyleSheet } from 'react-native'
import { StackNavigator} from 'react-navigation'
import Fighters from './screens/Fighters'
import FighterStats from './screens/FighterStats'
import Octagirls from './screens/Octagirls'
import Home from './screens/Home'

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#252625',
  }
})

const RootStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerStyle: styles.header,
      title: "Home"
    },
    headerTitleStyle: {
      color: '#fff'
    },
    headerBackTitleStyle: {
      color: '#fff'
    },
    headerTintColor: '#fff'
  },
  Fighters: {
    screen: Fighters,
    navigationOptions: {
      title: "Fighters"
    }
  },
  FighterStats: {
    screen: FighterStats,
  },
  Octagirls: {
    screen: Octagirls,
    navigationOptions: {
      title: "Octagon Girls"
    }
  },
}, {
  initialRouteName: 'Home'
})


export default class App extends React.Component {
  render () {
    return (
    <Provider store={ store }>
      <RootStack />
    </Provider>
    )
  }
}
