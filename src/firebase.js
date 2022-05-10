// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from  "firebase/storage"
import {
  getAuth,
} from "firebase/auth";
import {
  getFirestore,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDScFfYRb9NibVbTMQlCmIe8GFVrJvO_vM",
  authDomain: "adyantayurveda-cba8a.firebaseapp.com",
  projectId: "adyantayurveda-cba8a",
  storageBucket: "adyantayurveda-cba8a.appspot.com",
  messagingSenderId: "573886833679",
  appId: "1:573886833679:web:3f47f38671b2ce2136ef7a",
  measurementId: "G-0MYVE8Z92Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  auth,
  db,
  storage,
  analytics,
};