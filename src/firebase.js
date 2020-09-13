import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDa7WQwC5-57spMz5pKTHhMi9p53wKgBx0",
  authDomain: "facebook-messenger-clone-7b5d2.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-7b5d2.firebaseio.com",
  projectId: "facebook-messenger-clone-7b5d2",
  storageBucket: "facebook-messenger-clone-7b5d2.appspot.com",
  messagingSenderId: "916687743725",
  appId: "1:916687743725:web:d9e366a90d53796b70bae4",
  measurementId: "G-V2NFTCQHNC"
});

const db = firebaseApp.firestore();

export {db};