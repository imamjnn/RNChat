import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Alert, Button, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation'

class Tab3 extends Component {

_onPressButton = () => {
  this.props.navigation.navigate('Profile')
}

render() {
  return (
    <View style={styles.container}>
      <Button title='Setting' color='#f50057' onPress={this._onPressButton} />
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
