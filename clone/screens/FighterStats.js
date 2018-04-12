import React, { Component } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native'

class FighterStats extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params
    return {
      title: title
    }
  }

  render() {
    let dataStat = this.props.navigation.state.params.data
    console.log(dataStat)
    return (
      <View style={ styles.body }>
        <Text style={{ fontSize: 20, fontFamily: 'Helvetica', paddingVertical: 10}}> {dataStat.nickname }</Text>
        <Text style={{ fontSize: 12, paddingVertical: 3}}> {dataStat.weight_class }</Text>
        <Image 
          style={{width: 180, height: '100%', alignSelf: 'center', marginTop: 10}} 
          source={{ uri: dataStat.right_full_body_image}} 
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  }
})

export default FighterStats