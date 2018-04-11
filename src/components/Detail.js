import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Video } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }
});

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mute: false,
      shouldPlay: true
    }
  }

  handlePlayAndPause = () => {  
    this.setState((prevState) => ({
      shouldPlay: !prevState.shouldPlay  
    }));
  }
  
  handleVolume = () => {
    this.setState(prevState => ({
      mute: !prevState.mute,  
    }));
  }

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.first_name + ' ' + navigation.state.params.last_name,
    headerStyle: {
      backgroundColor: '#d8d8d8'
    },
    headerTitleStyle: {
      width: '100%',
      textAlign: 'center'
    },
    headerTintColor: '#000000'
  })

  render() {
    const fighter = this.props.navigation.state.params;
    const { width } = Dimensions.get('window');

    return (
      <View style={{flexDirection: 'column', padding: 10}}>
        <Image source={{uri: fighter.thumbnail}} style={{width:200, height: 200}} />
        <Text style={{fontSize:30, fontWeight:'bold'}}>
          { fighter.first_name } { fighter.last_name }{'\n'}
          <Text style={{fontSize:15, fontWeight:'normal', alignSelf:'center'}}>
            Class: { fighter.weight_class }{'\n'}
            Wins: { fighter.wins } | Draws: { fighter.draws } | Losses: { fighter.losses }{'\n'}
            Status: { fighter.fighter_status }
          </Text>
        </Text>
        <Text>&nbsp;</Text>
        <View>
          <Video
            source={{ uri: 'http://pdvid.ufc.tv/2018/03/23/JJFightingSpirit.dsk.mp4' }}
            shouldPlay={this.state.shouldPlay}
            resizeMode="cover"
            style={{ width: '99%', height: 200 }}
          />
          <View style={styles.controlBar}>
            <Icon name={this.state.mute ? "volume-off" : "volume-up"} size={40} color={'white'} onPress={this.handleVolume}/>
            <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>
            <Icon name={this.state.shouldPlay ? "pause-circle" : "play-circle"} size={40} color={'white'} onPress={this.handlePlayAndPause}/>
          </View>
        </View>
      </View>
    )
  }
}
