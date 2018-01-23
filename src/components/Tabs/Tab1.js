import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

class Tab1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#f50057" />
        <Text>Tab1</Text>
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

export default Tab1;
