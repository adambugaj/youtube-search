import * as firebase from 'firebase';

// It authorize and enables the option to login by Google account
  var config = {
    apiKey: "AIzaSyD8KKLEhwNunmkjRef2sI5xhSY8RK7QjRo",
    authDomain: "search-app-205113.firebaseapp.com",
    databaseURL: "https://search-app-205113.firebaseio.com",
    projectId: "youtube-search-app-205113",
    storageBucket: "",
    messagingSenderId: "419182674523"
  };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
