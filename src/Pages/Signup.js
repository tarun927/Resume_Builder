import React from 'react'
import styles from '../Styles/signup.module.css'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";

import { useDispatch, useSelector } from 'react-redux';
import { homeChange, userChange } from '../redux/action/action';
import { db } from '../firebase-config';


export default function Signup() {
    const emailUp = React.createRef(null);
    const passUp = React.createRef(null);
    const nameUp = React.createRef(null);
    let userState = useSelector(state=>state.userReducer)
    let dispatch = useDispatch()

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
              
                    console.log("success addFun");
                    const docRef = await addDoc(collection(db, "User_Info"), {
                        name: nameUp.current.value,
                        email: emailUp.current.value,
                    });

                    console.log("Document written with ID: ", docRef.id);
                    dispatch(userChange({...userState,doc_id:docRef.id,email:emailUp.current.value}))
                    
               

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