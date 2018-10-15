import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



// Initialize Firebase
var config = {
    apiKey: "AIzaSyCnjAa2n0JMY7mddCwPLEWAkD-HJfvVi94",
    authDomain: "redux-tutorial-bcfb8.firebaseapp.com",
    databaseURL: "https://redux-tutorial-bcfb8.firebaseio.com",
    projectId: "redux-tutorial-bcfb8",
    storageBucket: "redux-tutorial-bcfb8.appspot.com",
    messagingSenderId: "629524761073"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;