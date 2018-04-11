import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PokeCard from '../components/PokeCard'

// Redux
import { bindActionCreators } from 'redux'
import { getComic, getCards } from '../redux/action.js'
import { connect } from 'react-redux'

class Main extends React.Component {
  static navigationOptions = {
    title: 'Fire Pokemon'
  }

  render () {
    return (
      <View style={ styles.Container }>
        <Text>{this.props.test}</Text>
        <PokeCard />
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

export default connect(stateToProps,dispatchToProps)(Main);

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  }
})
