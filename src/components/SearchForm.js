import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Dimensions,
  Text, TextInput,
  View, TouchableOpacity,
  Image, FlatList,
  ScrollView
} from 'react-native';

// Redux
import { bindActionCreators } from 'redux'
import { getCards } from '../redux/action.js'
import { connect } from 'react-redux'

class SearchForm extends React.Component {
  constructor() {
    super()
    this.state = {
      types: '',
      name: '',
      series: '',
      set: '',
    }
  }

  onInput = (text, field) => {
    this.setState({
      [field]: text
    })
  }

  searchCard = () => {
    let query = {
      name: this.state.name,
      types: this.state.types,
      series: this.state.series,
      set: this.state.set,
    }
    this.props.getCards(query)
  }

  render () {
    return (
      <View style={styles.listContainer}>
        <Text style={styles.searchTextInput}>Name :</Text>
        <TextInput
          style={ styles.input }
          value={this.state.query}
          onChangeText={(text) => this.onInput(text, 'name')}
        />

        <Text style={styles.searchTextInput}>Type :</Text>
        <TextInput
          style={ styles.input }
          value={this.state.query}
          onChangeText={(text) => this.onInput(text, 'types')}
        />

        <Text style={styles.searchTextInput}>Series :</Text>
        <TextInput
          style={ styles.input }
          value={this.state.query}
          onChangeText={(text) => this.onInput(text, 'series')}
        />

        <Text style={styles.searchTextInput}>Set :</Text>
        <TextInput
          style={ styles.input }
          value={this.state.query}
          onChangeText={(text) => this.onInput(text, 'set')}
        />
        <TouchableOpacity
          onPress={this.searchCard}
          style={styles.button}
        >
          <Text style={styles.searchText}>Submit</Text>
        </TouchableOpacity>
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
  getCards
}, dispatch)

export default connect(stateToProps, dispatchToProps)(SearchForm);


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
  searchTextInput: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
  },
  searchText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 12,
  },
  button: {
    width: width-20,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginVertical: 5,
  },
  input: {
    height: 50,
    width: width-20,
    backgroundColor: 'grey',
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 1
  }
})
