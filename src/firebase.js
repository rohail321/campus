import firebase from 'firebase'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCxG4gbYIetGRlmUVF1UdJv_o7mLJDCoE0",
    authDomain: "campus-9b6ca.firebaseapp.com",
    databaseURL: "https://campus-9b6ca.firebaseio.com",
    projectId: "campus-9b6ca",
    storageBucket: "campus-9b6ca.appspot.com",
    messagingSenderId: "149413652981",
    appId: "1:149413652981:web:48963fb735a345567e58bc"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase