import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, AsyncStorage, Alert } from 'react-native';
import { getUserStorage, getMeId } from '../services/LocalStorage';
import { authLogout } from '../config/auth';
import Storage from '../services/Storage';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      userData: [],
      isDisabled: false
    }
  }

  componentDidMount() {
    getUserStorage().then((res) => {
      console.log('inininini '+Storage.getUid())
      this.setState({userData: res})
    })
  }

  _onPressLogout = () => {
    this.setState({isDisabled: true});
    authLogout(Storage.getToken()).then(response => {
      if(response.status == 'success'){
        AsyncStorage.removeItem('users').then(res => {
          this.props.screenProps.changeLoginState(false)
        })
      }else{
        this.setState({isDisabled: false})
        Alert.alert(response.message)
      }
    })
    
  }

  render() {
    const user = this.state.userData;
    return (
      <View style={styles.container}>
        <Text>{user.token}</Text>
        <Button 
          title='Logout' 
          color='red' 
          disabled={this.state.isDisabled}
          onPress={() => this._onPressLogout()}
        />
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
