import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDvGV_dspzmB4VRymUqhHd_vBo0ZK3NrPY",
    authDomain: "wjynt-6359c.firebaseapp.com",
    databaseURL: "https://wjynt-6359c.firebaseio.com",
    projectId: "wjynt-6359c",
    storageBucket: "wjynt-6359c.appspot.com",
    messagingSenderId: "153966209558"
  };
  firebase.initializeApp(config);

  firebase.firestore().settings(settings);

  export default firebase;