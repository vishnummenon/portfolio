import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYgEL8Ek3kZyxwHIvAuxDr8amBf2cOsaY",
  authDomain: "portfolio-6e4d1.firebaseapp.com",
  projectId: "portfolio-6e4d1",
  storageBucket: "portfolio-6e4d1.appspot.com",
  messagingSenderId: "312989906285",
  appId: "1:312989906285:web:3baef858083492c6055664",
  measurementId: "G-96NVQJR45S"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;