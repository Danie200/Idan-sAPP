// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs3bSfZ8PNU-3CWnA6TBqO9zH5VAS49cI",
  authDomain: "idan-sapp.firebaseapp.com",
  projectId: "idan-sapp",
  storageBucket: "idan-sapp.appspot.com",
  messagingSenderId: "214477120598",
  appId: "1:214477120598:web:3f5da6b72291486e3a47f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}