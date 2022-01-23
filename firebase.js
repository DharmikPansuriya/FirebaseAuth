// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgpiJN3SMZc8LHHWF3eg5fMHNNAzPBR94",
  authDomain: "fir-auth-470cc.firebaseapp.com",
  projectId: "fir-auth-470cc",
  storageBucket: "fir-auth-470cc.appspot.com",
  messagingSenderId: "640709485573",
  appId: "1:640709485573:web:521585066d9f2da33ca86c"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };