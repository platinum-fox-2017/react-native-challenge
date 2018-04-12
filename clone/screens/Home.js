import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Image, ImageBackground } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import { getFighters } from '../store/fighters/fighter.actions'
import { getOctagirls } from '../store/octagirls/octagirls.actions'

class Home extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.imgContain}>
          <Image style={ styles.image } source={require('../components/assets/UFC_Logo.png')}/> 
        </View>
        <TouchableHighlight>
          <View style={styles.card}> 
            <Text style={styles.cardText} onPress = { () => this.props.navigation.navigate('Fighters') }>Fighters</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={styles.card}> 
            <Text style={styles.cardText} onPress = { () => this.props.navigation.navigate('Octagirls') }>Octagon Girls</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
  componentDidMount () {
    this.props.loadFighters()
    this.props.loadOctagirls()
  }
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#303030',
    width: '100%',
    paddingTop: 20
  },
  card: {
    // margin: 'auto',
    marginTop: 20,
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor: 'white',
    padding: 30,
    width: '95%',
    borderWidth: 1,
    borderBottomColor: 'silver',
    borderTopColor: 'silver'
  },
  cardText: {
    color: '#fff',
    fontSize: 30,
    backgroundColor: 'transparent'
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: '90%',
    // height: 30,
    alignSelf: 'center',
    // transform: [{scale: 0.55}]
  },
  imgContain: {
    height: 150,
    marginBottom: 20
  }
})

function mapDispatchToProps (dispatch) {
  return {
    loadFighters: () => dispatch(getFighters()),
    loadOctagirls: () => dispatch(getOctagirls())
  }
}

export default connect(null, mapDispatchToProps)(Home)
