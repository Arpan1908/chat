// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDaDl5FnGxbYueeirA8F80WO3UBknkcx1k",
  authDomain: "chatopps-c5c98.firebaseapp.com",
  projectId: "chatopps-c5c98",
  storageBucket: "chatopps-c5c98.appspot.com",
  messagingSenderId: "425004820752",
  appId: "1:425004820752:web:1667e39ca0b680ac7b5d95",
  measurementId: "G-F6RQ9H22YM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
