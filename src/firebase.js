import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBTLPtgLCT8oHPTJNw4wkCv89rM8J9hP2U",

  authDomain: "developers-chat-1d6b4.firebaseapp.com",

  projectId: "developers-chat-1d6b4",

  storageBucket: "developers-chat-1d6b4.appspot.com",

  messagingSenderId: "8883131491",

  appId: "1:8883131491:web:c389f208be2988e39d5456",

  measurementId: "G-KQNRWN3NZM"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db=getFirestore();