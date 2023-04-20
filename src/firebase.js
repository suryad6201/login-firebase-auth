import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoyIdxolvs3WRoTnC5DUcjYYJBpj1HfnY",
  authDomain: "breeze-auth-146bf.firebaseapp.com",
  projectId: "breeze-auth-146bf",
  storageBucket: "breeze-auth-146bf.appspot.com",
  messagingSenderId: "1041207284592",
  appId: "1:1041207284592:web:3fbf05bb17c59d2e2835b5",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
