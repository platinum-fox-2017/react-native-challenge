import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import PropTypes from 'prop-types'
import axios from 'axios'

class XkcdView extends React.Component {
  constructor(){
    super()
    this.state = {
      data: {},
      isLoaded: false
    }
  }

  componentDidMount() {
    // this.loadComic()
  }

  loadComic = () => {
    // axios.get('http://xkcd.com/info.0.json')
    //   .then(resp => {
    //     this.setState({
    //       data: resp.data,
    //       isLoaded: true
    //     })
    //   })
  }

  render () {
    if (this.props.data.img) {
      return (
        <View>
          <Text>{ this.props.data.safe_title }</Text>
          <Image
            style={{ width: 300 , height: 300 }}
            source={{ uri: this.props.data.img}}
          />
          <Text
            style={ styles.xkcdText }
          >
            { this.props.data.alt }
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

export default XkcdView;

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
