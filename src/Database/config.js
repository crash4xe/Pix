// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaVMp7X-mz1UaPN8sMcknFXdF33wFmrMc",
  authDomain: "instax-618b5.firebaseapp.com",
  databaseURL:
    "https://instax-618b5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "instax-618b5",
  storageBucket: "instax-618b5.appspot.com",
  messagingSenderId: "928005267620",
  appId: "1:928005267620:web:51da777cbe7b8dd4d34631",
  measurementId: "G-K0P7JZYS97",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = database();

export { db };
