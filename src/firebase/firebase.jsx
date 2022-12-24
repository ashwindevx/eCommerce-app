import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNIHP2nJbSOVN4yYRO1FigdLG__iM1wWM",
  authDomain: "e-comm-c64cd.firebaseapp.com",
  projectId: "e-comm-c64cd",
  storageBucket: "e-comm-c64cd.appspot.com",
  messagingSenderId: "991150595045",
  appId: "1:991150595045:web:51bfcf78e850652437ed0c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
