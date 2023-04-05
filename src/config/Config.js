//import * as firebase from 'firebase';
//import firebase from 'firebase/app'
//import 'firebase/auth';
//import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";
//import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDfs-7O3yQya3dnsNktdwywIXFvnxlAIf0",
  authDomain: "ecommerce-site-2d86f.firebaseapp.com",
  projectId: "ecommerce-site-2d86f",
  storageBucket: "ecommerce-site-2d86f.appspot.com",
  messagingSenderId: "397951983231",
  appId: "1:397951983231:web:71e0f652fadd25c6a9294a",
  measurementId: "G-WP2846J5F4"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export {auth, db, storage} 