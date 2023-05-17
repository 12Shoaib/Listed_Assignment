import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBsC6EStLeNHsO5hzLiYPIJEbdSijlDFHE",
  authDomain: "dashboard-f290f.firebaseapp.com",
  projectId: "dashboard-f290f",
  storageBucket: "dashboard-f290f.appspot.com",
  messagingSenderId: "16581534920",
  appId: "1:16581534920:web:18c91ffa3c4b691297b1fd",
  measurementId: "G-BR3E6679VD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth , provider}