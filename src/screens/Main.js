import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PokeCard from '../components/PokeCard'

class Main extends React.Component {
  static navigationOptions = {
    title: 'Fire Pokemon'
  }

  render () {
    return (
      <View style={ styles.Container }>
        <PokeCard />
      </View>
    )
  }
}

// <PokeCard></PokeCard>

export default Main;

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
