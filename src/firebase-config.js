// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7me1YGoS6p3JD8JoXQfum2120Vu5gZig",
  authDomain: "resume-builder-5ca59.firebaseapp.com",
  projectId: "resume-builder-5ca59",
  storageBucket: "resume-builder-5ca59.appspot.com",
  messagingSenderId: "463413343056",
  appId: "1:463413343056:web:f71da1818d7320dafab255",
  measurementId: "G-8WSH5PKX8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)












// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "@firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCm6TFJkkdHUuVREJARygj8EesZLjZznTQ",
//     authDomain: "test-9ce80.firebaseapp.com",
//     projectId: "test-9ce80",
//     storageBucket: "test-9ce80.appspot.com",
//     messagingSenderId: "33528766391",
//     appId: "1:33528766391:web:0d047893cd945d3289d232",
//     measurementId: "G-42MP3L07W4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app)