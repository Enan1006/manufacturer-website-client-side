// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbN9TXUCqenp4iBb5O0cQcRszOXG5wbgg",
    authDomain: "e-car-manufacturer.firebaseapp.com",
    projectId: "e-car-manufacturer",
    storageBucket: "e-car-manufacturer.appspot.com",
    messagingSenderId: "284455068432",
    appId: "1:284455068432:web:9394b8cb461af6a2c7bb95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;