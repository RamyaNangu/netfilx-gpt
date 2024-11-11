// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABS6ZUO2dK2TaCzz-46gem0TBdoBoXPMY",
  authDomain: "netflixgpt-f6745.firebaseapp.com",
  projectId: "netflixgpt-f6745",
  storageBucket: "netflixgpt-f6745.firebasestorage.app",
  messagingSenderId: "538256798450",
  appId: "1:538256798450:web:a5fbcd4d54c1d6c4eed66b",
  measurementId: "G-DRYENKJP3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();