import React, { Component } from 'react';
import { ActivityIndicator, View, StatusBar, StyleSheet } from 'react-native';
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
        <View style={styles.container}>
          <StatusBar backgroundColor="black" />
          <ActivityIndicator color='#f50057' />
        </View>
      ) 
    }
    return this.state.loggedIn ?
      <SignedIn screenProps={{changeLoginState: this.handleChangeLoginState}} /> :
      <SignedOut screenProps={{changeLoginState: this.handleChangeLoginState}} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});