
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAaYMD7OiJurs3tEtQWwdXQzBOPwhb0Wwk",
  authDomain: "webii-3ba34.firebaseapp.com",
  projectId: "webii-3ba34",
  storageBucket: "webii-3ba34.appspot.com",
  messagingSenderId: "177188285320",
  appId: "1:177188285320:web:9ddecc812f00aee005283d",
  measurementId: "G-H4WKCYZEWX"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;