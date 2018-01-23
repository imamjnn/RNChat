//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { sendMessage, loadMessages, closeChat } from '../../services/ChatData';
import { getUserStorage } from '../../services/LocalStorage';

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
    loadMessages((mess) => {
      console.log(mess)
      this.setState({messages: mess})
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
    const pesan = this.state.messages;
    console.log('kofet '+pesan.text)
    return (
      <View style={styles.container}>
        {/* {pesan.map((pes, index) => {
          return <Text>{pes.text}</Text>
        })} */}
        
        <TextInput
          placeholder='Type your message'
          onChangeText={(mess) => this.setState({ message: mess })}
        />
        <Button 
          title='Sent'
          onPress={() => this._onPressSend()}
        />
      </View>
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
