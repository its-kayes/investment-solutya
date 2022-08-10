// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpJIBpxWTbnFL-gM9ldP7XM5VVfT--5mk",
  authDomain: "investment-solutya.firebaseapp.com",
  projectId: "investment-solutya",
  storageBucket: "investment-solutya.appspot.com",
  messagingSenderId: "728688721298",
  appId: "1:728688721298:web:2cbb8a2d4bd2efb94bd54b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth = getAuth(app)

export default auth;