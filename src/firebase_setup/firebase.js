// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfoIkYxd1pcALp8mc8U3aqiykObe_PavQ",
    authDomain: "omniapp-f155e.firebaseapp.com",
    projectId: "omniapp-f155e",
    storageBucket: "omniapp-f155e.appspot.com",
    messagingSenderId: "314915673305",
    appId: "1:314915673305:web:0852776b67f9e8db445ac8",
    measurementId: "G-Y7E2Q5CMYP"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const storage = getStorage(app);
export const firestore = getFirestore(app)
export default storage;