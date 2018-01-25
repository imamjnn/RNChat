import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Alert, Button, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation'

class Tab2 extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Comming soon.. :)</Text>
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

export default Tab2;
