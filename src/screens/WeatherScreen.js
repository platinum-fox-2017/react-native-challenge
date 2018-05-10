import React, { Component } from 'react';
import { View, Text } from 'react-native'

class WeatherScreen extends Component {
  render() {
    const data = this.props.navigation.state.params.data
    return (
      <View>
        <Text>{data.summary}</Text>
      </View>
    );
  }
}

export default WeatherScreen;