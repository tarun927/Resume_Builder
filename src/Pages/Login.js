import React from 'react'
import styles from '../Styles/login.module.css'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, onSnapshot, getFirestore } from "firebase/firestore";

import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { eduChange, finalChange, homeChange, skillChange, summaryChange, userChange, workChange } from '../redux/action/action';
//google
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { db } from '../firebase-config';

const provider = new GoogleAuthProvider();



export default function Login() {
    const navigate = useNavigate()
    const emailIn = React.createRef(null);
    const passIn = React.createRef(null);
    let homestate = useSelector(state => state.homeReducer)
    let dispatch = useDispatch()

    const handleSignIn = () => {

        const auth = getAuth();
        signInWithEmailAndPassword(auth, emailIn.current.value, passIn.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user)
                console.log("logged in");

                //get data
                const q = query(collection(db, "User_Info"), where("email", "==", emailIn.current.value));
                const unsubscribe = onSnapshot(q, (querySnapshot) => {

                    querySnapshot.forEach((doc) => {
                        // nameArr.push(doc.data().name);
                        // dispatch(userChange({
                        //     isLogin: 1,
                        //     doc_id: doc.id,
                        //     email: doc.data().email,
                        //     name: doc.data().name
                        // }))
                        let obj = {
                            isLogin: 1,
                            doc_id: doc.id,
                            email: doc.data().email,
                            name: doc.data().name
                        }
                        localStorage.setItem('userReducer', JSON.stringify(obj))
                        let retr = localStorage.getItem('userReducer')

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








