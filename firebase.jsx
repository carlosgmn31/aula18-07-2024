// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqHPm3NdXYHdftVcGMYFfaajoKVSvVSNc",
  authDomain: "aula-app-19734.firebaseapp.com",
  projectId: "aula-app-19734",
  storageBucket: "aula-app-19734.appspot.com",
  messagingSenderId: "1082925922711",
  appId: "1:1082925922711:web:98b2765d913916c1acecd2",
  measurementId: "G-JX9X4JJ6Q8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

