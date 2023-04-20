import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdx9yLZEzQuRpxfYIT2Tr76CW_jX2ZQ54",
  authDomain: "breeze-assignment.firebaseapp.com",
  projectId: "breeze-assignment",
  storageBucket: "breeze-assignment.appspot.com",
  messagingSenderId: "1013271517553",
  appId: "1:1013271517553:web:ee099d3dc478fa00b17ed0",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
