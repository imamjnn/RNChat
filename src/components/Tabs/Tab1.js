//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';
import { sendMessage, loadMessages, closeChat, listItems } from '../../services/ChatData';
import { getUserStorage } from '../../services/LocalStorage';
import { GiftedChat, Send, Bubble } from 'react-native-gifted-chat';

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

  _renderSend(props) {
    return (
      <Send
        {...props}
      >
        <View style={{marginRight: 5, marginBottom: 5}}>
          <Image style={{width: 33, height: 33}} source={require('../../images/send.png')} resizeMode={'center'}/>
        </View>
      </Send>
    );
  }

  _renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          letft: {
            //backgroundColor: 'white'
          },
          right: {
            backgroundColor: '#f50057'
          }
        }}
      />
    )
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
        isLoadingEarlier={true}
        renderSend={this._renderSend}
        renderBubble={this._renderBubble}
      />
      
    );
  }
}

export default Tab1;
