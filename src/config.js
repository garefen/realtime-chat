import firebase from 'firebase'

// Set the configuration for your app
  // TODO: Replace with your project's config object
  const firebaseConfig = {
    apiKey: "AIzaSyBhGsZH4wktjOyIZOJ_GVmTuV4TCXV8LsE",
    authDomain: "real-time-chat-cc620.firebaseapp.com",
    databaseURL: "https://real-time-chat-cc620.firebaseio.com",
    projectId: "real-time-chat-cc620",
    storageBucket: "real-time-chat-cc620.appspot.com",
    messagingSenderId: "234045026156",
    appId: "1:234045026156:web:476b9eaf041e06557e4d49",
    measurementId: "G-HK9PK5MVHD"
  };
  const fire = firebase.initializeApp(firebaseConfig);


  export default fire;