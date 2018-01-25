import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, AsyncStorage, Keyboard, StatusBar, ScrollView, Image } from 'react-native';
import { authLogin } from '../config/auth';
import { saveUserStorage } from '../services/LocalStorage';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: null,
      password: null,
      isDisabled: false
    }
  }

  _onLogin = () => {
    this.setState({isDisabled: true});
    authLogin(this.state.username, this.state.password).then(res => {
      saveUserStorage(res.user, res.token);
      this.setState({isDisabled: false});
      return this.props.screenProps.changeLoginState(true);
      Keyboard.dismiss();
    })
  }

  // onLogin = () => {
  //   const data = {username: this.state.username, password: this.state.password};
  //   AsyncStorage.setItem('users', JSON.stringify(data))
  //   .then((res) => {
  //     this.setState({
  //       username: this.state.username,
  //       password: this.state.password
  //     });
  //     return this.props.screenProps.changeLoginState(true);
  //     Keyboard.dismiss();
  //   })
  // }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" />
        
        <View style={styles.s_image}> 
          <Image 
            source={require('../images/chat-features.png')} 
            style={{width: 135, height: 100}} 
          />
        </View>
        <View>
          <TextInput
            style={styles.s_text} 
            underlineColorAndroid='transparent'
            selectionColor='pink'
            placeholder='Username'
            onChangeText={(userName) => this.setState({username: userName})}
          />
        </View>
        <View style={{paddingTop:10, paddingBottom:10}}>
          <TextInput 
            style={styles.s_text} 
            underlineColorAndroid='transparent'
            selectionColor='pink'
            placeholder='Password'
            secureTextEntry={true}
            onChangeText={(passWord) => this.setState({password: passWord})}
          />
        </View>

        <Button 
          title='Login'
          color='#f50057'
          disabled={this.state.isDisabled}
          onPress={() => this._onLogin()}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  s_text: {
    backgroundColor: 'white',
    height: 40,
    borderWidth: 1,
    borderColor: '#f50057'
  },
  s_image: {
    alignItems: 'center',
    paddingBottom: 20
  }
});

export default Login;
