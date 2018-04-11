import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Weather from '../components/Weather'


class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View>
        <Button
          title="About"
          onPress={() => this.props.navigation.navigate('About')}
        />
        <Weather />
      </View>
    );
  }
}

export default HomeScreen;