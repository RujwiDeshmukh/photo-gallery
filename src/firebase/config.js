import   firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

//import {firebase} from '@firebase/app';

//const firebase = require('firebase/app')
//import 'firebase/storage';
//import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAOAx0yhw0KPUCvPzn5VT89KYezLVG-uRM",
  authDomain: "photo-gallery-45d16.firebaseapp.com",
  projectId: "photo-gallery-45d16",
  storageBucket: "photo-gallery-45d16.appspot.com",
  messagingSenderId: "290234444582",
  appId: "1:290234444582:web:79d029d1a3ea092b1bafe7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //it starts up our storage service  n then anytime we want to do any kind of interaction with storage service on backend
  const projectStorage = firebase.storage();

  //anytime we want to interact with firestore database
  const projectFirestore = firebase.firestore();

  //for the timestamp /createdAt
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  //special type of data, a timestamp data that firebase uses in its firestore


  export {projectStorage, projectFirestore , timestamp};