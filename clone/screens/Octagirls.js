import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View, FlatList, Image, StyleSheet } from 'react-native';

class Octagirls extends Component {

  keyExtractor = (item, index) => `octa-${item.id}`

  renderItem = ({ item }) => (
    <View>
      <Image style={{width: 150, height: 150, alignSelf: 'center'}} source={{ uri: item.medium_profile_picture }}/>
      <Text>{`${item.first_name} ${item.last_name}`}</Text>
      <Text>{ item.country_residing }</Text>
      <Text>{ item.quote }</Text>
    </View>
  )
  render() {
    return (
      <View style={ styles.container }>
        { (this.props.octagirls.length)? 
          <Text> No Data </Text> 
          :
          <FlatList
            data={ this.props.octagirls.octagirls }
            renderItem={ this.renderItem }
            keyExtractor={ this.keyExtractor }
          />
        }
        {/* <Text> {JSON.stringify( this.props.octagirls )}</Text> */}
      </View>
    )
  }
};

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
    octagirls: state.octagirls
  }
}

export default connect(mapStateToProps, null)(Octagirls)
