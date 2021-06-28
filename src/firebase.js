import firebase from "firebase/app";
require('firebase/firestore')
require('firebase/auth')

const firebaseConfig = { 
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET_ID,
    appId: process.env.REACT_APP_APP_ID
};
  
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore(); 
export default db;