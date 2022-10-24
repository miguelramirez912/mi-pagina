// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Import FireStore
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYT31feYQa3TFBAu9eGC59sIDdpqfIMO8",
  authDomain: "mi-pagina-personal-4ac52.firebaseapp.com",
  projectId: "mi-pagina-personal-4ac52",
  storageBucket: "mi-pagina-personal-4ac52.appspot.com",
  messagingSenderId: "213639526122",
  appId: "1:213639526122:web:fa935d582f21b08c528993"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);


