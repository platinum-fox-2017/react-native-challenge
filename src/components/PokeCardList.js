import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';

class PokeCardList extends React.Component {
  render () {
    let card = this.props.card
    return (
      <TouchableOpacity
        key={ this.props.itemId }
        style={ styles.card }
        onPress={ this.props.onPressItem }
      >
        <Image
          style={{ width: 300, height: 419 }}
          source={{ uri: card.imageUrl }}
        />
      </TouchableOpacity>
    )
  }
}

export default PokeCardList;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
    padding: 4,
    borderStyle: 'solid',
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 20
  }
})
