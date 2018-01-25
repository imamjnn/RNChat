import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Alert, Button, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { getUser } from '../../services/UserData';
import Storage from '../../services/Storage';

class Tab3 extends Component {

  state = {
    user: ''
  }

  componentDidMount() {
    getUser(Storage.getUid()).then(res => {
      console.log('testung '+res.user.id);
      this.setState({user: res.user})
    })
  }

  _onPressButton = () => {
    this.props.navigation.navigate('Profile')
  }

  render() {
    const me = this.state.user;
    return (
      <View style={styles.container}>
        <View style={styles.profilContainer}>
          <Text style={{ fontSize:20, color:'black' }}>{me.name}</Text>
          <Text>{me.email}</Text>
        </View>
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
  profilContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20
  },
});

export default Tab3;
