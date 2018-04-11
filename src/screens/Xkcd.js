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

// Redux
import { bindActionCreators } from 'redux'
import { getComic, getCards } from '../redux/action.js'
import { connect } from 'react-redux'

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
    // this.loadComic()
    this.props.getComic()
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
    return (
      <View style={ styles.xkcdView }>
        <Text>{this.props.test}</Text>
        { this.props.isLoading ? (
          <Text>Loading</Text>
        ) : (
          <View>
            <Text>{ this.props.comic.safe_title }</Text>
            <Image
              style={{ width: 300 , height: 300 }}
              source={{ uri: this.props.comic.img}}
            />
            <Text
              style={ styles.xkcdText }
            >
              { this.props.comic.alt }
            </Text>
          </View>
        ) }
      </View>
    )
  }
}

const stateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    err: state.err,
    cards: state.cards,
    comic: state.comic,
    test: state.test
  }
}

const dispatchToProps = (dispatch) => bindActionCreators({
  getCards,
  getComic
}, dispatch)

export default connect(stateToProps,dispatchToProps)(Xkcd);


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
