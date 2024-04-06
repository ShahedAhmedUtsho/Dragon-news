// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "dragon-news-9c380.firebaseapp.com",
  projectId: "dragon-news-9c380",
  storageBucket: "dragon-news-9c380.appspot.com",
  messagingSenderId: "896165310714",
  appId: "1:896165310714:web:86f4dcc4f61bbd7f495943"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const Auth =getAuth(app)
export default Auth