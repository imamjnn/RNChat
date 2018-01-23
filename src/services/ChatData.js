import firebase from '../config/firebase';

messagesRef = null;

export const loadMessages = (callback) => {
  messagesRef = firebase.database().ref('messages');
  this.messagesRef.off();
  const onReceive = (data) => {
    const message = data.val();
    callback({
      _id: data.key,
      text: message.text,
      createdAt: new Date(message.createdAt)
    });
  };
  this.messagesRef.limitToLast(10).on('child_added', onReceive);
}

export const sendMessage = (_text, _user, _messFor) => {
  this.messagesRef.push({
    text: _text,
    user: _user,
    mess_for: _messFor,
    createdAt: firebase.database.ServerValue.TIMESTAMP,
  });
}

export const closeChat = () => {
  if(this.messagesRef) {
    this.messagesRef.off();
  }
}