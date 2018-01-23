import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Alert, Button, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation'

class Tab3 extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Cettingan adalah aplikasi chat simple real time database firebase</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default Tab3;
