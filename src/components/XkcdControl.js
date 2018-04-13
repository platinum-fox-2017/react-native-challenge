import React from 'react'
import {
  StyleSheet, Dimensions,
  View, Image, Text,
  TouchableOpacity,
  ScrollView, FlatList,
} from 'react-native'
import PropTypes from 'prop-types'

// Redux
import { bindActionCreators } from 'redux'
import { getComic, getCards } from '../redux/action.js'
import { connect } from 'react-redux'

class XkcdControl extends React.Component {
  render () {
    return (
      <View style={ styles.body }>
        <Image
          style={{ width: 300 , height: 300 }}
          source={{ uri: this.props.comic.img}}
        />
        <View style={ styles.control }>
          <TouchableOpacity
            style={ styles.controlTouchables }
            onPress={ this.previous }
          >
            <Text style={ styles.controlText }>
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={ styles.controlTouchables }
            onPress={ this.home }
          >
            <Text style={ styles.controlText }>
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={ styles.controlTouchables }
            onPress={ this.next }
          >
            <Text style={ styles.controlText }>
              Next
            </Text>
          </TouchableOpacity>
        </View>
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

export default connect(stateToProps,dispatchToProps)(XkcdControl);

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
