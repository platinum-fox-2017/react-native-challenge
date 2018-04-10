import React, { Component } from 'react';
import {  View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

export default class Answer extends Component {

  state = {
    percentage: '',
    result: ''
  }

  setAnswer = ( answer ) => {
    this.setState({
      percentage: answer.percentage,
      result: answer.result
    })
  }

  getAnswer = () => {
    axios({
      method: 'get',
      url: `https://love-calculator.p.mashape.com/getPercentage?fname=${this.props.maleName}&sname=${this.props.femaleName}`,
      headers: {
        'X-Mashape-Key': "qB9f5MkwtAmshZD8Jx67Pz6ExctYp18YWsXjsnz3X6N46quOxU",
        'Accept': "application/json"
      }
    })
    .then(resp => this.setState({
      percentage: resp.data.percentage,
      result: resp.data.result
    }))
  }

  render() {
    console.log(this.props.maleName)
    return (
      <View style={ styles.container }>
        <Button
          onPress={ () => this.getAnswer() }
          title='Check it out!'
        />
          { 
            this.state.percentage && this.state.result ?
            <View style={ styles.answer }>
            <Text> Matching Percentage: { this.state.percentage } % </Text>
            <Text> Relationship Suggestion </Text>
            <Text> { this.state.result } </Text>
            </View>
            :
            <View>
              <Text style={ styles.answerDefault }> Your Answer Here </Text>
            </View>
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  answerDefault: {
    textAlign: 'center',
    marginVertical: 16,
  },
  answer: {
    margin: 16
  }
})
