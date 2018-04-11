import React, { Component } from 'react';
import { View, Text } from 'react-native'
import moment from 'moment'
class WeatherList extends Component {
  render() {
    return (
      <View style={{margin: 10, padding: 10, backgroundColor: '#9e9e9e'}}>
      <Text>{ moment(this.props.item.time).format('MMMM Do YYYY, h:mm:ss a') }</Text>
      {/* <Text>{ item.summary }</Text>
      <Text>{ item.icon }</Text>
      <Text>{ `Sunrise Time: ${moment(item.sunriseTime).format('MMMM Do YYYY, h:mm:ss a')}` }</Text>
      <Text>{ `Sunset Time: ${moment(item.sunsetTime).format('MMMM Do YYYY, h:mm:ss a')}` }</Text>
      <Text>{ `Pressure: ${item.pressure}` }</Text> */}
  </View>
    );
  }
}

export default WeatherList;