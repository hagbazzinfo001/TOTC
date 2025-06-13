// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIP8EiJlXr2RyYJCIOwsIu0TTrhNODk1Y",
  authDomain: "totc-815bc.firebaseapp.com",
  projectId: "totc-815bc",
  storageBucket: "totc-815bc.firebasestorage.app",
  messagingSenderId: "113232740246",
  appId: "1:113232740246:web:d6ba32d5c4a928ad19a7b7",
  measurementId: "G-0315QPB6N7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app); // Export auth
export const db = getFirestore(app); // Export Firestore