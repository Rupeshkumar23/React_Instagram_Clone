/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY45AWkgSmafHLNrG-xeI4v1I05pLqVec",
  authDomain: "you-chat-1f13e.firebaseapp.com",
  databaseURL: "https://you-chat-1f13e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "you-chat-1f13e",
  storageBucket: "you-chat-1f13e.appspot.com",
  messagingSenderId: "408958452822",
  appId: "1:408958452822:web:015fdb1c93fb830d5a27f7",
  measurementId: "G-XQJL5863TH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(app)
