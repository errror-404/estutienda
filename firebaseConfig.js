import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcC23C6-oaQ8LQFUOtO6UbKXF3rY4r_jQ",
  authDomain: "pruebawt-defd3.firebaseapp.com",
  projectId: "pruebawt-defd3",
  storageBucket: "pruebawt-defd3.appspot.com",
  messagingSenderId: "866140239708",
  appId: "1:866140239708:web:4fbe4f73edc13211cf3399",
  measurementId: "G-WKCJKQ0TY1",
};

const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const auth = getAuth(app);
export const database = getFirestore();

export {
  app,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
