import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'
import { withNavigation } from 'react-navigation';
import moment from 'moment'

class WeatherList extends Component {
  render() {
    return (
      (this.props.item) ?
        <View style={{margin: 10, padding: 10, backgroundColor: '#9e9e9e'}}>
          <Text>{ moment.unix(this.props.item.time).format("dddd, MMMM Do YYYY, h:mm:ss a") }</Text>
          <Text>{ `Sunrise Time: ${moment.unix(this.props.item.sunriseTime).format('MMMM Do YYYY, h:mm:ss a')}` }</Text>
          <Text>{ `Sunset Time: ${moment.unix(this.props.item.sunsetTime).format('MMMM Do YYYY, h:mm:ss a')}` }</Text>
          <Text>{ `Pressure: ${this.props.item.pressure}` }</Text>
          <Button
            title="Go to Details"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              // console.log(this.props.navigation)
              this.props.navigation.navigate('WeatherDetail', {
                data: this.props.item,
              });
            }}
          />
      </View>
      : ''
    )
  }
}

export default withNavigation(WeatherList);