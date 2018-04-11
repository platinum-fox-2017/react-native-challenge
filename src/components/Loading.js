import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class Loading extends Component {
  render() {
    return (
      <View>
        <Text>Loading..</Text>
        <Image
          source={require('../img/loading.gif')}
          style={{textAlign: 'center'}}
        />
      </View>
    )
  }
}
