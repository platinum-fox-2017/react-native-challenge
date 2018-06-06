import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Dimensions,
  View, Image, Text,
  TouchableOpacity,
  ScrollView, FlatList,
} from 'react-native';

// Redux
import { bindActionCreators } from 'redux'
import { getComic, getCards } from '../redux/action.js'
import { connect } from 'react-redux'

// comp
import XkcdControl from '../components/XkcdControl'

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
    this.home()
  }

  home = () => {
    this.props.getComic('home')
  }

  next = () => {
    if (this.props.isLoading === false) {
      if (this.props.comicAmount === this.props.comic.num) {
        return
      }
      this.props.getComic('next')
    }
  }

  previous = () => {
    if (this.props.isLoading === false) {
      if (this.props.comic.num < 0) {
        return
      }
      this.props.getComic('prev')
    }
  }

  render () {
    return (
      <View style={ styles.xkcdView }>
        { this.props.isLoading ? (
          <View style={ styles.title }>
            <Text style={styles.titleText}>Loading</Text>
          </View>
        ) : (
          <ScrollView contentContainerStyle={ styles.container }>
            <View style={ styles.title }>
              <Text style={styles.titleText}>{ this.props.comic.safe_title }</Text>
            </View>
            <XkcdControl />
            <View style={ styles.alt }>
              <Text
                style={ styles.altText }
              >
                { this.props.comic.alt }
              </Text>
            </View>
          </ScrollView>
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
    test: state.test,
    comicAmount: state.comicAmount,
  }
}

const dispatchToProps = (dispatch) => bindActionCreators({
  getCards,
  getComic
}, dispatch)

export default connect(stateToProps,dispatchToProps)(Xkcd);

let { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  xkcdView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
    backgroundColor: '#211f1d',
  },
  xkcdText: {
    maxWidth: 300,
  },
  control: {
    flexDirection: 'row'
  },
  controlTouchables: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    width: 95,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 3,
  },
  container: {
    backgroundColor: '#211f1d',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  controlText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 12,
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width-12,
  },
  body: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: width-12,
  },
  alt: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: width-12,
  },
  titleText: {
    color: '#f2f2f2',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  altText: {
    color: '#f2f2f2',
    padding: 10,
    fontSize: 12,
  },
})
