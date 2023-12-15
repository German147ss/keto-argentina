// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOcPgxPZLgSGeVMh2Xn6_pTLBqj162mFI",
  authDomain: "keto-argentina-py.firebaseapp.com",
  projectId: "keto-argentina-py",
  storageBucket: "keto-argentina-py.appspot.com",
  messagingSenderId: "314181593190",
  appId: "1:314181593190:web:b6366e795cf67b2111a5a7",
  measurementId: "G-GY04SL3ZN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);