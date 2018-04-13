import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  Dimensions
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
        { this.props.isLoading ? (
          <View style={ styles.title }>
            <Text>Loading</Text>
          </View>
        ) : (
          <ScrollView contentContainerStyle={ styles.container }>
            <View style={ styles.title }>
              <Text style={styles.titleText}>{ this.props.comic.safe_title }</Text>
            </View>
            <View style={ styles.body }>
              <Image
                style={{ width: 300 , height: 300 }}
                source={{ uri: this.props.comic.img}}
              />
            </View>
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
    test: state.test
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
  },
  xkcdText: {
    maxWidth: 300,
  },
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
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
    color: 'black',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  altText: {
    color: 'black',
    padding: 10,
    fontSize: 12,
  },
})
