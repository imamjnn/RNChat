import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBuZqVXBmqQhIaxEvNn4cXNAKDUQoIIlOo",
  authDomain: "react-chat-007.firebaseapp.com",
  databaseURL: "https://react-chat-007.firebaseio.com",
  projectId: "react-chat-007",
  storageBucket: "react-chat-007.appspot.com",
  messagingSenderId: "422978356277"
};
firebase.initializeApp(config);

export default firebase;
