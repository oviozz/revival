
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyADh-GzWc1uWxky4PAZlbg83x_94PMV15o",
    authDomain: "revivalestates-40767.firebaseapp.com",
    projectId: "revivalestates-40767",
    storageBucket: "revivalestates-40767.appspot.com",
    messagingSenderId: "782955405208",
    appId: "1:782955405208:web:259b86ff362c3ac42695ed",
    measurementId: "G-2QY4YTRF9N"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


