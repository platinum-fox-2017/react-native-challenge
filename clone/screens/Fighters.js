import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TextInput, TouchableHighlight } from 'react-native';
import { TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import { searchFighters } from '../store/fighters/fighter.actions'
import FighterCard from '../components/FighterCard'

class Fighters extends React.Component { 
 
  handleChange = (e) => {
    console.log(e)
    this.props.updateSearch(e)
  }
  
  goToDetail = (fighter) => {
    console.log(fighter)
    this.props.navigation.navigate('FighterStats', { title: `${fighter.first_name} ${fighter.last_name}`, data: fighter })
  }

  renderItem = ({item}) => (
    <FighterCard 
      fighter={item}
      press={ () => this.goToDetail(item) } 
      key={`fighter-${item.id}`}
    />
  )
  
  keyExtractor = (item, index) => `fighter-${item.id}`

  render() {
    console.log('props from redux ', this.props.fighters)
    let regex = new RegExp(this.props.fighters.query, 'gi')
    let arr = this.props.fighters.fighters.filter(fighter => regex.test(fighter.first_name) || regex.test(fighter.last_name) )
    if (arr.length) {
      return (
        <View style={ styles.body }>
          <View style={styles.container}>
            <TextInput
              style={{height: 30, width:200, borderColor: 'gray', borderWidth: 1, marginTop: 20, marginBottom: 30 }} 
              placeholder='Search...'
              defaultValue={ this.props.fighters.query }
              onChangeText={ this.handleChange }
            />
            <FlatList 
              data={ arr }
              renderItem={ this.renderItem }
              keyExtractor={ this.keyExtractor }
            />
          </View>
        </View>
      );
    } else {
      return (
        <View style={ styles.body }>
          <View style={styles.container}>
            <TextInput
                style={{height: 30, width:200, borderColor: 'gray', borderWidth: 1, marginTop: 20, marginBottom: 30 }} 
                placeholder='Search...'
                defaultValue={ this.props.fighters.query }
                onChangeText={ this.handleChange }
            />
            <Text style={{ fontSize: 25 }}> No result found for '{ this.props.fighters.query }' </Text>
          </View>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  list: {
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5
  },
  body: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

function mapStateToProps (state) {
  return {
    fighters: state.fighters
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateSearch: (payload) => dispatch(searchFighters(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fighters)