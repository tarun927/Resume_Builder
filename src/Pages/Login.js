import React from 'react'
import styles from '../Styles/login.module.css'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, onSnapshot,getFirestore } from "firebase/firestore";

//google
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { homeChange } from '../redux/action/action';
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
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();



export default function Login() {
    const navigate = useNavigate()
    const emailIn = React.createRef(null);
    const passIn = React.createRef(null);
    const db = getFirestore();
    let homestate = useSelector(state=>state.homeReducer)
    let dispatch = useDispatch()

    const handleSignIn = () => {

        const auth = getAuth();
        signInWithEmailAndPassword(auth, emailIn.current.value, passIn.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user)

                //get data
                const q = query(collection(db, "User_Info"), where("email", "==", emailIn.current.value));
                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                   
                    querySnapshot.forEach((doc) => {
                        // nameArr.push(doc.data().name);
                        console.log({...homestate,name:doc.data().name,email:doc.data().email});
                        dispatch(homeChange({...homestate,name:doc.data().name,email:doc.data().email, isLogin:1}))
                    });
                    // console.log(nameArr);
                });

              navigate("/")  
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error)
            });
    }

    const handleGoogle = () => {


        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...

                navigate("/")
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }


    return (
        <div className="form-card">
            <div>
                <div className="form-section">
                    <h2 className="form-heading center">Enter Login details</h2>
                    <div className="input-group full">
                        <label>Email</label>
                        <div className="effect">
                            <input className="input-sign" type="text" name="email" ref={emailIn} />
                        </div>
                    </div>
                    <div className="input-group full">
                        <label>Password</label>
                        <div className="effect">
                            <input className="input-sign" type="password" name="password" ref={passIn} />
                        </div>
                    </div>
                    <div className="form-buttons">
                        <button style={{ marginLeft: "95px" }} className="btn hvr-float-shadow" type="button" onClick={handleSignIn}>Login</button> or <span style={{ borderRadius: "10px 55px 55px 10px" }} onClick={handleGoogle}>SignIn with <img style={{ width: "5%", marginBottom: "-16px", backgroundColor: "white", borderRadius: "50%" }} src="/images/GoogleLogo.png" alt="" /></span>

                    </div>
                </div>
            </div>

        </div>
    )
}








