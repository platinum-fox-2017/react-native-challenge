import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView
} from 'react-native';

class PokeCardDetail extends React.Component {
  static navigationOptions = ({navigation}) => {
    const { params } = navigation.state
    return {
      title: params ? params.selectedCard.name : 'Detail'
    }
  }

  render () {
    const { params } = this.props.navigation.state;
    const card = params ? params.selectedCard : null;
    if (card) {
      return (
        <ScrollView contentContainerStyle={styles.Container}>
          <Text>
            {card.name}
          </Text>
          <Image
            style={{ width: 300, height: 419 }}
            source={{ uri: card.imageUrlHiRes }}
          />
          <Text>
            Type: {card.types}
          </Text>
          <Text>
            Set: {card.set}
          </Text>
          <Text>
            Rarity: {card.rarity}
          </Text>
          <Text>
            HP: {card.hp}
          </Text>
          <Text>
            Type: {card.types}
          </Text>
          <FlatList
            data={card.attacks}
            keyExtractor={(attack, index) => `attack-${index}`}
            renderItem={({item}) => (
              <View>
              <Text>
                { item.name } { item.damage }
              </Text>
              <Text>
                { item.text }
              </Text>
              </View>
            )}
          />
        </ScrollView>
      )
    } else {
      return (
        <View>
        <Text>
          Loading...
        </Text>
        </View>
      )
    }

  }
}

export default PokeCardDetail;

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
