import React, { Component } from 'react';
import { ActivityIndicator, View, StatusBar } from 'react-native';
import { SignedIn, SignedOut } from './src/routes';
import { checkUser } from './src/config/auth';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      checkLogin: false,
    }
  }
  componentDidMount() {
    checkUser().then(res => {
      this.setState({loggedIn: res, checkLogin: true});
    })
  }

  handleChangeLoginState = (loggedIn = false) => {
    this.setState({ loggedIn });
  };

  render() {
    if(!this.state.checkLogin){
      return (
        <View>
          <StatusBar backgroundColor="#f50057" />
          <ActivityIndicator color='#f50057' />
        </View>
      ) 
    }
    return this.state.loggedIn ?
      <SignedIn screenProps={{changeLoginState: this.handleChangeLoginState}} /> :
      <SignedOut screenProps={{changeLoginState: this.handleChangeLoginState}} />
  }
}