import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import * as firebaseui from "firebaseui";


const firebaseConfig = {
  apiKey: "AIzaSyACiQ0l7nbCrfpEcJYKAmB1J408rfYP5to",
  authDomain: "telegram-test-mini-apps.firebaseapp.com",
  projectId: "telegram-test-mini-apps",
  storageBucket: "telegram-test-mini-apps.appspot.com",
  messagingSenderId: "326311676737",
  appId: "1:326311676737:web:2069d6bc88fb5aa882efc0"
};
//const firebaseConfig = {
//  apiKey: "AIzaSyBXZGGegIREw2tvsZgpcKR66_oBpvk0DFI",
//  authDomain: "miniapptgpaymentloginvideo.firebaseapp.com",
//  //authDomain: "adapted-worm-one.ngrok-free.app",
//  //authDomain: "t.me/MiniAppTgPaymentLoginVideo_bot/MiniAppTgPaymentLoginVideo",
//  projectId: "miniapptgpaymentloginvideo",
//  storageBucket: "miniapptgpaymentloginvideo.appspot.com",
//  messagingSenderId: "184797749474",
//  appId: "1:184797749474:web:d2c5c08bd6f3c705c57ebb",
//  measurementId: "G-B07RDEGCW6",
//};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "it";

//const authUi = new firebaseui.auth.AuthUI(auth);

export { app, auth };
