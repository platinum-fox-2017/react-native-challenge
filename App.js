import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import Main from './src/screens/Main'
import Xkcd from './src/screens/Xkcd'
import PokeCardDetail from './src/components/PokeCardDetail'


const RootStack = StackNavigator(
  {
    Home: {
      screen: Main,
    },
    Details: {
      screen: PokeCardDetail,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#dd3300'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

const XkcdStack = StackNavigator(
  {
    Latest: {
      screen: Xkcd
    }
  },
  {
    initialRouteName: 'Latest',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#dd3300'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
)

export default TabNavigator(
  {
    Root: { screen: RootStack },
    Xkcd: { screen: XkcdStack }
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
)

// export default class App extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }
