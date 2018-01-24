//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { sendMessage, loadMessages, closeChat, listItems } from '../../services/ChatData';
import { getUserStorage } from '../../services/LocalStorage';
import { GiftedChat } from 'react-native-gifted-chat';

// create a component
class Chat extends Component {
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
    // const meId = this.state.me;
    // const forId = this.props.navigation.state.params.item.id;
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

  _onPressSend = () => {
    let data = {
      _text: this.state.message,
      _user: this.state.me,
      _messFor: this.props.navigation.state.params.item.id
    }
    sendMessage(data._text, data._user, data._messFor)
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
          _messFor: this.props.navigation.state.params.item.id,
          name: 'koko',
        }}
      />
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default Chat;
