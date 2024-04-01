// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanagerbackend-accac.firebaseapp.com",
  projectId: "taskmanagerbackend-accac",
  storageBucket: "taskmanagerbackend-accac.appspot.com",
  messagingSenderId: "57857119716",
  appId: "1:57857119716:web:36ef0ec69b7f62b3c9e3f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
