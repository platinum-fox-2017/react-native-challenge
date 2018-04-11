import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'

export default class Kepala extends React.Component {
  render() {
    return (
      <View style={ styles.bgLayer }>
        <Text> this is heading </Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  bgLayer: {
    backgroundColor: '#262526',
    width: '100%',
    height: 40,
  }
})