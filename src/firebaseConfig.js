import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDYi0oZ19TEeF161SHS04cZJCYlja76wnw",
  authDomain: "test-732b5.firebaseapp.com",
  projectId: "test-732b5",
  storageBucket: "test-732b5.appspot.com",
  messagingSenderId: "782550541627",
  appId: "1:782550541627:web:ae15a6dbd87fbdff99431e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth();