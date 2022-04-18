// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxWJGGf_Okdisn0b_3Us7SlMmJVmvOtYU",
  authDomain: "curso-react-js-8e6f0.firebaseapp.com",
  projectId: "curso-react-js-8e6f0",
  storageBucket: "curso-react-js-8e6f0.appspot.com",
  messagingSenderId: "51981700176",
  appId: "1:51981700176:web:6d1b4301a0244b65241555"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);