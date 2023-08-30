import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCNC4qbsEBfTMFT8y2az0W9j82Rqukt_Zk",
  authDomain: "feed-back-811c0.firebaseapp.com",
  projectId: "feed-back-811c0",
  storageBucket: "feed-back-811c0.appspot.com",
  messagingSenderId: "309734424676",
  appId: "1:309734424676:web:b6d87153806cfb338f5f71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider= new GoogleAuthProvider();
export const emailJsConfig = {
  userId: 'ukQkw86UstZluDUbx',
};
export const db = getFirestore(app);
export const storage = getStorage(app);