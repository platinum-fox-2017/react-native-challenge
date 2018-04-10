import React, { Component } from 'react';
import {  View, Text, StyleSheet, Button } from 'react-native';
import InputForm from '../components/InputForm'

export default class MatchMaker extends Component {
  static navigationOptions = {
    title: "How Match Are You?"
  }
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.title }> Welcome To MatchMaker </Text>
        <InputForm />
        <Button
         title='About the creator'
         onPress={ () => this.props.navigation.navigate('About') }
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    // fontFamily: 'futura',
  }
})