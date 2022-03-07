// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBOBViafiqAqbkqb0m3TIzREsZo6Iz9GOE",
    authDomain: "tableseeker.firebaseapp.com",
    projectId: "tableseeker",
    storageBucket: "tableseeker.appspot.com",
    messagingSenderId: "536026624958",
    appId: "1:536026624958:web:19218e2bb94df00070bfef"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();