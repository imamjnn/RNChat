//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { sendMessage, loadMessages, closeChat, listItems } from '../../services/ChatData';
import { getUserStorage } from '../../services/LocalStorage';
import { GiftedChat } from 'react-native-gifted-chat';

// create a component
class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: '',
      me: ''
    }
  }

  componentDidMount() {
    getUserStorage().then(res => {
      this.setState({ me: res.user })
    })
    loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    })
  }

  componentWillUnmount() {
    closeChat();
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          sendMessage(message);
        }}
        user={{
          _id: this.state.me,
          name: 'koko',
        }}
      />
      
    );
  }
}

export default Tab1;
