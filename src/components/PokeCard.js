import React from 'react'
import { StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import axios from 'axios'
import PokeCardList from './PokeCardList'

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
    this.dataLoad()
  }

  dataLoad = () => {
    axios.get('https://api.pokemontcg.io/v1/cards?types=fire&page=1',
    {headers: {
      'page-size': 10,
      count: 30
    }}).then(resp => {
        this.setState({
          data: resp.data,
          cards: resp.data.cards,
          isLoaded: true
        }, () => {
          console.log(this.state.data);
          console.log(this.state.cards);
        })
      }).catch(err => {
        this.setState({
          err: err.message
        })
      })
  }

  _keyExtractor = (item, index) => item.id

  _onPressItem = (item) => {
    this.setState({
      selectedCard: item
    }, () => {
      console.log(this.state.selectedCard);
      console.log(this);
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

  render () {
    return (
      <View style={ styles.Container }>
        <Text>
          Fire Cards
        </Text>
        <Text>
          { this.state.err }
        </Text>
        <View>
          <FlatList
            data={ this.state.cards }
            extraData={ this.state }
            keyExtractor={ this._keyExtractor }
            renderItem={ this._renderItem }
          />
        </View>

      </View>
    )
  }
}

// <FlatList
//   data={ this.state.cards }
//   extraData={ this.state }
//   keyExtractor={ this._keyExtractor }
//   renderItem={ this._renderItem }
// />

export default withNavigation(PokeCard);

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20
  },
  loadButton: {
    display: 'flex',
    backgroundColor: '#c7ff2d',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  }
})
