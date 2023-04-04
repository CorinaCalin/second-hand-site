import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDooe2m15T-tXP7IIjhSl7DgwMpqoJjuOs",
    authDomain: "ecommerce-site-1b96c.firebaseapp.com",
    projectId: "ecommerce-site-1b96c",
    storageBucket: "ecommerce-site-1b96c.appspot.com",
    messagingSenderId: "132381525765",
    appId: "1:132381525765:web:a3ed74225da3e94fb7996c",
    measurementId: "G-KQ2HWWD6P8"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export {auth, db, storage} 