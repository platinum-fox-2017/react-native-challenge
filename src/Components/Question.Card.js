import React, { Component } from 'react';

import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'

import { 
  Container, 
  Content, 
  Button, 
  Icon, 
  Card, 
  CardItem, 
  Body, 
  Left, 
  Right, 
  IconNB } from 'native-base'

export default class QuestionContent extends Component {

  

  _renderItem = ({item}) => (
    <View>
      <CardItem>
        <View style={styles.header_view_each}>
          <Text>Category {item.category}</Text>
        </View>
      </CardItem>
      <CardItem>
        <Body>
          <Text>{item.question}</Text> 
        </Body>
      </CardItem>
      <CardItem footer bordered>
        <Button onPress={() => this.props.submit('True', item.question, this.props.name)} success style={styles.button_size}>
          <Text style={styles.button_font}>True</Text>
        </Button>
        <Button onPress={() => this.props.submit('False', item.question, this.props.name)} danger style={styles.button_size}>
          <Text style={styles.button_font}>False</Text>
        </Button>
      </CardItem> 
    </View>
  )

  render() {
    return (
        <Card>
          <FlatList
          data={this.props.questions}
          renderItem={this._renderItem}
          />
        </Card>
    )
  }
}

const styles = StyleSheet.create({
  button_size: {
    width: 80,
    paddingLeft: 10,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 10,
    marginRight: 10,
  },
  header_view_each: {
    flex: 1,
    width: 100
  },
  button_font: {
    textAlign: 'center',
    alignItems: 'center',
    color: '#ffffff',
    flex: 1
  },
  header_view: {
    flex: 1, 
    flexDirection:'row'
  }
})
