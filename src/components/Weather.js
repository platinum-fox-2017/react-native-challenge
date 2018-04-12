import React, { Component } from 'react';
import { Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  FlatList } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import axios from 'axios'

import { loadDataF } from '../store/Weathers/weather.action'

// Components
import WeatherList from './WeatherList'

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '-6.260719',
      longtitude: '106.781616',
      datasDaily: []
    };
  }

  // getWeatherData = (latitude,longtitude) => {
  //   axios.get('https://api.darksky.net/forecast/b842ca00e6521c68a9b02df4a39ba74e/' + latitude + ',' + longtitude)
  //     .then((response) => {
  //       this.setState({
  //         datasDaily: response.data.daily.data
  //       })
  //     })
  //     .catch((err) => {
  //       Alert.alert(
  //         'Alert',
  //         'ERRRRR',
  //         [{text: 'OK'}],
  //         { cancelable: false }
  //       )
  //     }
  //   )
  // }

  handlePress = () => {
    const latitude = this.state.latitude
    const longtitude = this.state.longtitude
    this.props.loadDataF(latitude,longtitude)
    // this.getWeatherData(latitude,longtitude)
  }

  render() {
    return (
      <View>
        <TextInput style={styles.Form} value={this.state.latitude} onChangeText={(latitude) => this.setState({latitude})}/>
        <TextInput style={styles.Form} value={this.state.longtitude} onChangeText={(longtitude) => this.setState({longtitude})}/>
        <Button
          onPress={this.handlePress}
          title="Submit"
          color="#841584"
        />

        {
        /* <View style={{height: 350}}>
          <ScrollView>
          {
            (this.state.datasDaily.length < 1) ? '' :
              this.state.datasDaily.map((data) =>
              <View key={ data.time }>
                <Text>{ data.time }</Text>
                <Text>{ data.summary }</Text>
                <Text>{ data.icon }</Text>
                <Text>{ `Sunrise Time: ${data.sunriseTime}` }</Text>
                <Text>{ `Sunset Time: ${data.sunsetTime}` }</Text>
                <Text>{ `Pressure: ${data.pressure}` }</Text>
                <Text>{ `Pressure: ${data.pressure}` }</Text>
              </View>
            )
          }
          </ScrollView>
        </View> */
        }

        {<View style={{height: 400}}>
          <FlatList
            data={this.props.weatherList}
            keyExtractor={(item, index) => item.time.toString()}
            renderItem={({item}) =>
              <WeatherList item={ item } />
            }
          />
        </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Form: {
    margin: 10,
    padding: 8,
    height: 40,
    borderColor: '#b0bec5',
    borderWidth: 0.5
  }
})

const mapStateToProps = state => {
  return {
    weatherList: state.weatherList
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    loadDataF,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)