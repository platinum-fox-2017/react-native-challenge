import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import axios from 'axios'

class Xkcd extends React.Component {
  constructor(){
    super()
    this.state = {
      data: {},
      isLoaded: false
    }
  }

  static navigationOptions = {
    title: 'Xkcd'
  }

  componentDidMount() {
    this.loadComic()
  }

  loadComic = () => {
    axios.get('http://xkcd.com/info.0.json')
      .then(resp => {
        this.setState({
          data: resp.data,
          isLoaded: true
        })
      })
  }

  render () {
    if (this.state.data.img) {
      return (
        <View
          style={ styles.xkcdView }
        >
          <Text>{ this.state.data.safe_title }</Text>
          <Image
            style={{ width: 300 , height: 300 }}
            source={{ uri: this.state.data.img}}
          />
          <Text
            style={ styles.xkcdText }
          >
            { this.state.data.alt }
          </Text>
        </View>
      )
    } else {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }
  }
}

export default Xkcd;

const styles = StyleSheet.create({
  xkcdView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  xkcdText: {
    maxWidth: 300,
  },
  loadButton: {
    display: 'flex',
    backgroundColor: '#c7ff2d',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  }
})
