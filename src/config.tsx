
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuwxoLdAYB_RrScU687-IEWuhzKimK150",
  authDomain: "authentication-f092c.firebaseapp.com",
  projectId: "authentication-f092c",
  storageBucket: "authentication-f092c.appspot.com",
  messagingSenderId: "818813197027",
  appId: "1:818813197027:web:1e76141aa11120c5e383d6",
  measurementId: "G-2FTCB3S9ZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider};