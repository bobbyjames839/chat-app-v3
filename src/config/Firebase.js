import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA5SayW4aEeplMXjh74KxBWg7jOJMUt_U4",
  authDomain: "messaging-app-v2-77f08.firebaseapp.com",
  projectId: "messaging-app-v2-77f08",
  storageBucket: "messaging-app-v2-77f08.appspot.com",
  messagingSenderId: "567812602873",
  appId: "1:567812602873:web:003561ec5ad3afa3fe9b28"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);