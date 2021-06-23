import firebase from "firebase/app";
require('firebase/firestore')
require('firebase/auth')

const firebaseConfig = { 
    apiKey: "AIzaSyAkTxXNUT07vy-HvR6bxE_PYqfKI2Kdpas",
    authDomain: "fsmwebsite-e67af.firebaseapp.com",
    projectId: "fsmwebsite-e67af",
    storageBucket: "fsmwebsite-e67af.appspot.com",
    messagingSenderId: "120445896830",
    appId: "1:120445896830:web:712213083399a6c999f02f"
};
  
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore(); 
export default db;