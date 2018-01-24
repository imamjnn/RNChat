import firebase from '../config/firebase';

messagesRef = null;

export const listItems = () => {
  messagesRef = firebase.database().ref('messages');
  this.messagesRef.on('value', (snap) => {
    var items = [];
    snap.forEach((child) => {
      items.push({
        text: child.val().text
      })
    })
    console.log(items)
  })
}

export const loadMessages = (callback) => {
  messagesRef = firebase.database().ref('messages');
  this.messagesRef.off();
  const onReceive = (data) => {
    const message = data.val();
    //if(message.user._id == 9){
      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name,
        },
      });
    //}
    
  };
  this.messagesRef.limitToLast(10).on('child_added', onReceive);
}

export const sendMessage = (message) => {
  for (let i = 0; i < message.length; i++) {
    this.messagesRef.push({
      text: message[i].text,
      user: message[i].user,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
    });
  }
}

export const closeChat = () => {
  if(this.messagesRef) {
    this.messagesRef.off();
  }
}