import React, { Component } from 'react';
import Answer from '../components/Answer';
import {  View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default class InputForm extends Component {

  state = {
    maleName: '',
    femaleName: ''
  }

  render() {
    return (
      <View>
        <Text> Input Male Name </Text>
        <TextInput
          style={{ width:"90%", alignContent:"center" }}
          onChangeText={
            (text) => this.setState({
              maleName: text
            })
          }
          value={ this.state.maleName }
          />
        <Text> Input Female Name </Text>
        <TextInput
          style={{ width:"90%", alignContent:"center" }}
          onChangeText={
            (text) => this.setState({
              femaleName: text
            })
          }
          value={ this.state.femaleName }
        />
        <Answer maleName={ this.state.maleName } femaleName={ this.state.femaleName }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  questionBox: {
    margin: 8,
    paddingTop: 8,
    width: "90%",
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'solid',
    justifyContent: 'center',
    borderColor: 'gainsboro'
  },
  formTitle: {

  }
})