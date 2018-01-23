import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, AsyncStorage } from 'react-native';
import { getUserStorage } from '../services/localStorage';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      userData: []
    }
  }

  componentDidMount() {
    getUserStorage().then((res) => {
      console.log('inininini '+res.id)
      this.setState({userData: res})
    })
  }

  _onPressLogout = () => {
    AsyncStorage.removeItem('users').then(res => {
      this.props.screenProps.changeLoginState(false)
    })
  }

  render() {
    const user = this.state.userData;
    return (
      <View style={styles.container}>
        <Text>{user.token}</Text>
        <Button title='Logout' color='red' onPress={() => this._onPressLogout()} />
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

export default Profile;
