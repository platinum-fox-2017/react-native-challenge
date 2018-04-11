import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Heading from './components/Heading'
// import garfield from 'garfield'

export default class App extends React.Component {
  render() {
    // let garf = garfied.random()
    return (
      <View style={{ flex: 1 }}>
        <Heading />
        <View style={styles.container}>
          {/* <Text> {garf} </Text> */}
          <Text style={styles.list}>Open up App.js to start working on your app!</Text>
          <Text>Changes make will automatically reload.</Text>
          <Text>Shake your booty to open the developer menu.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    fontSize: 20,
  }
});
