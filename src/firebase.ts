
//import firebase from 'firebase/app';
//import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaCaRfDM8NdbAp9B6oKHVhNlG_BPB32Ls",
  authDomain: "punto-venta-c779b.firebaseapp.com",
  projectId: "punto-venta-c779b",
  storageBucket: "punto-venta-c779b.appspot.com",
  messagingSenderId: "1016598093351",
  appId: "1:1016598093351:web:d2f07f9d04eef8fa373802"
};

const app = initializeApp(firebaseConfig);
//firebase.initializeApp(firebaseConfig);

//const db = firebase.firestore();
export const db = getFirestore(app)


