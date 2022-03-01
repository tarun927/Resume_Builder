import React from 'react'
import styles from '../Styles/signup.module.css'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCm6TFJkkdHUuVREJARygj8EesZLjZznTQ",
    authDomain: "test-9ce80.firebaseapp.com",
    projectId: "test-9ce80",
    storageBucket: "test-9ce80.appspot.com",
    messagingSenderId: "33528766391",
    appId: "1:33528766391:web:0d047893cd945d3289d232",
    measurementId: "G-42MP3L07W4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default function Signup() {
    const emailUp = React.createRef(null);
    const passUp = React.createRef(null);
    const nameUp = React.createRef(null);
    const db = getFirestore();

    const handleSignUp = () => {
        console.log("btn clickd");
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, emailUp.current.value, passUp.current.value)
            .then(async (userCredential) => {
                // Signed in 
                console.log("success")
                const user = userCredential.user;
                // ...
                console.log(user)

                //adding in collection
                try {
                    console.log("success addFun");
                    const docRef = await addDoc(collection(db, "User_Info"), {
                        name: nameUp.current.value,
                        email: emailUp.current.value,
                    });
    
                    console.log("Document written with ID: ", docRef.id);
                } catch (error) {
                    console.log(error);
                }

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
                // ..
            });

           
    }
    return (
        <div className="form-card">
            <div>
                <div className="form-section">
                    <h2 className="form-heading center">Enter Your details</h2>
                    <div className="input-group full">
                        <label>Name</label>
                        <div className="effect">
                            <input className="input-sign" type="text" name="name" ref={nameUp} />
                        </div>
                    </div>
                    <div className="input-group full">
                        <label>Email</label>
                        <div className="effect">
                            <input className="input-sign" type="text" name="email" ref={emailUp} />
                        </div>
                    </div>
                    <div className="input-group full">
                        <label>Password</label>
                        <div className="effect">
                            <input className="input-sign" type="password" name="password" ref={passUp} />
                        </div>
                    </div>
                    <div className="form-buttons">
                        <button className="btn hvr-float-shadow" type="button" onClick={handleSignUp}>Login</button>
                    </div>
                </div>
            </div>

        </div>
    )
}