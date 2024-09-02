import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "friendsconnect-f0f36.firebaseapp.com",
  projectId: "friendsconnect-f0f36",
  storageBucket: "friendsconnect-f0f36.appspot.com",
  messagingSenderId: "449672288534",
  appId: "1:449672288534:web:ced8ff96f2f0db0bf2d837"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()

