import React, { Component } from 'react';
import { Text, View } from 'react-native';

class About extends Component {
  static navigationOptions = {
    title: 'About',
  };
  render() {
    return (
      <View>
        <Text>Ini About</Text>
      </View>
    );
  }
}

export default About;