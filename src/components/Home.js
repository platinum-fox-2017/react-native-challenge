import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFighterList } from '../store/actions/fighters';
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Loading from './Loading';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getFighterList();
  }

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#d8d8d8'
    },
    headerTitleStyle: {
      width: '100%',
      textAlign: 'center'
    },
    headerTintColor: '#000000'
  }

  _keyExtractor = (item, index) => index;
  _renderItem = ({item, index}) => (
    <View>
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Detail', item)}>
        <View style={{flexDirection: 'row', padding: 2}}>
          <Image source={{uri: item.thumbnail}} style={{width:70, height: 70}} />
          <Text style={{fontSize:15, fontWeight:'bold', alignSelf:'center'}}>
            { item.first_name } { item.last_name }{'\n'}
            <Text style={{fontSize:12, fontWeight:'normal', alignSelf:'center'}}>
              Class: { item.weight_class }{'\n'}
              Wins: { item.wins } | Draws: { item.draws } | Losses: { item.losses }{'\n'}
              Status: { item.fighter_status }
            </Text>
          </Text>
          <Icon name={"hand-o-right"} size={25} style={{alignSelf:'center', marginLeft:'auto'}}/>
        </View>
      </TouchableOpacity>
    </View>
  )

  render() {
    // console.log('render', this.props.fighters)
    return (
      <View>
      {
        this.props.fighters.loading ? 
        (
          <Loading />
        ) : (
          <FlatList
            data = { this.props.fighters.fighters }
            renderItem = { this._renderItem }
            keyExtractor = { this._keyExtractor }
          />
        )
      }
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  fighters: state.fighters,
})

const mapDispacthToProps = (dispatch) => (
  bindActionCreators({
    getFighterList,
  }, dispatch)
)

export default connect(mapStateToProps, mapDispacthToProps)(Home);
