import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdWxi_SJElOTfmATNpPyed7MUa35aE_Ts",
  authDomain: "react-course---crwn-clothing.firebaseapp.com",
  projectId: "react-course---crwn-clothing",
  storageBucket: "react-course---crwn-clothing.appspot.com",
  messagingSenderId: "846039098661",
  appId: "1:846039098661:web:1c19cb601ab71d1ae266cc",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);