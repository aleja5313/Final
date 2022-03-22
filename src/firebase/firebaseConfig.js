import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBsU_fx9j_Y3xyOhA5ZIxjQWBwen94k1KY",
  authDomain: "final-2992c.firebaseapp.com",
  projectId: "final-2992c",
  storageBucket: "final-2992c.appspot.com",
  messagingSenderId: "761316121995",
  appId: "1:761316121995:web:69ae562ea341243cbe238e",
};


const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore(app)

export { app, google, facebook, db};
