import React from 'react'
import {
  StyleSheet,
  Dimensions,
  Text, TextInput,
  View,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import axios from 'axios'

// comp
import SearchForm from './SearchForm'
import PokeCardList from './PokeCardList'

// Redux
import { bindActionCreators } from 'redux'
import { getComic, getCards } from '../redux/action.js'
import { connect } from 'react-redux'

class PokeCard extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoaded: false,
      data: {},
      cards: [],
      err: '',
      selectedCard: {}
    }
  }

  componentDidMount() {
    this.props.getCards()
  }

  _keyExtractor = (item, index) => item.id

  _onPressItem = (item) => {
    this.setState({
      selectedCard: item
    }, () => {
      this.props.navigation.navigate('Details', {
        selectedCard: item
      })
    })
  }

  _renderItem = ({ item }) => (
    <PokeCardList
      itemId={ item.id }
      card={ item }
      onPressItem={ () => this._onPressItem(item) }
    />
  )

  _renderHeader = () => (
    <View>
      <Text style={ styles.title }>
        Search by card's name, or the set.
      </Text>
      <Text style={styles.error}>
        { this.state.err }
      </Text>
      <SearchForm/>
    </View>

  )

  render () {
    return (
      <View style={ styles.Container }>
        <View style={styles.listContainer}>
          { this.props.isLoading ? (
            <Text>Loading</Text>
          ) : (
            <FlatList
              data={ this.props.cards }
              extraData={ this.state }
              keyExtractor={ this._keyExtractor }
              ListHeaderComponent={this._renderHeader}
              renderItem={ this._renderItem }
            />
          ) }
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
    test: state.test
  }
}

const dispatchToProps = (dispatch) => bindActionCreators({
  getCards,
  getComic
}, dispatch)

export default withNavigation(connect(stateToProps,dispatchToProps)(PokeCard));

let { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
  Container: {
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#211f1d',
    paddingTop: 45
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  error: {
    color: '#c92320'
  },
  loadButton: {
    display: 'flex',
    backgroundColor: '#c7ff2d',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  }
})
