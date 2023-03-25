import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYAW9F1kP29j38dfZuZxK4lppUkSLD25c",
  authDomain: "react-portfolio.firebaseapp.com",
  projectId: "react-portfolio-krishna",
  storageBucket: "react-portfolio-krishna.appspot.com",
  messagingSenderId: "706228920881",
  appId: "1:278164302078:web:797fe5960bb12b5fca1daf",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
