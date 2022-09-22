// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBFX5Wf5wktd4QpI2UvF4oKV8Z3BN0sq-8",
    authDomain: "app-revenue-senai.firebaseapp.com",
    projectId: "app-revenue-senai",
    storageBucket: "app-revenue-senai.appspot.com",
    messagingSenderId: "110389768077",
    appId: "1:110389768077:web:45b457373621c334e357c4",
    measurementId: "G-JF4DQ3RY82",
};

if(!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export {app, firebase, db, auth};
