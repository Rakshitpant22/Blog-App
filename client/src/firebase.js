// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, //! in Vite we have to use [import.meta.env] instead of process.env.
  authDomain: "mern-blog-5c3cd.firebaseapp.com",
  projectId: "mern-blog-5c3cd",
  storageBucket: "mern-blog-5c3cd.appspot.com",
  messagingSenderId: "51263167756",
  appId: "1:51263167756:web:418ad63e7357fc5cc47d29"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
