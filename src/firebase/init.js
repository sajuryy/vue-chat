import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const config = {
  apiKey: "AIzaSyAKAfBRQWrYQEOv_c5QCTMM7Jx2G0JaItc",
  authDomain: "vue-chat-690c8.firebaseapp.com",
  databaseURL: "https://vue-chat-690c8.firebaseio.com",
  projectId: "vue-chat-690c8",
  storageBucket: "vue-chat-690c8.appspot.com",
  messagingSenderId: "417319006989"
};
  const firebaseApp = firebase.initializeApp(config);
  // firebaseApp.firestore().settings({ timestampsInSnapshots: true});

  export default firebaseApp.firestore();