// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyw-TXdJr4Cvfj0h_L-XeovldEcOIlUhU",
  authDomain: "apphealth-1a2b.firebaseapp.com",
  projectId: "apphealth-1a2b",
  storageBucket: "apphealth-1a2b.firebasestorage.app",
  messagingSenderId: "907872385501",
  appId: "1:907872385501:web:10187a5b56c52186e79e34",
  measurementId: "G-0L37PST09L",
};

// Initialize Firebase
// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Initialiser l'authentification
const auth = getAuth(app);

// Créer le fournisseur Google
const provider = new GoogleAuthProvider();

// Exporter ces éléments
export { auth, provider, signInWithPopup };
