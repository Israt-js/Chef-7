// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJXbjOJT6QH8GDyFOQLDrQ2e3GxcMcbaE",
  authDomain: "recipe-7.firebaseapp.com",
  projectId: "recipe-7",
  storageBucket: "recipe-7.appspot.com",
  messagingSenderId: "545137679059",
  appId: "1:545137679059:web:7c88e963d8c2411da21226"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;