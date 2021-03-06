import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from '../../Styles/header.module.css'

export default function Header() {

    let userState = useSelector(state => state.userReducer)
    let a = userState.isLogin;
 

    const logoutFun = () => {
        localStorage.removeItem('userReducer')
        window.location.reload(false);
    }
    return (
        <>
            <div className={styles.logo}>
                <Link to="/">

                    <img style={{ width: "9vw", height: "10vh", position: "absolute", marginTop: "-30px", left: "0px", backgroundColor: "rgb(230, 225, 225)", padding: "0 10px", borderRadius: "9px", boxShadow: "0px 15px 10px -15px #111" }} src="/images/resumeLogo.png" alt="not" />
                </Link>
            </div>
            <div className={styles.contents}>
                <div>
                    Resume Templates
                </div>
                <div>
                    About Us
                </div>

                {
                    a == 1 ? <>
                        Hello {userState.name}
                        <div onClick={logoutFun}>Logout</div>
                    </> : <> <div className={styles.signupbtn}>
                        <Link to='/signup' style={{ textDecoration: "none" }}>
                            Register
                        </Link>
                    </div>
                        <div className={styles.loginbtn}>
                            <Link to='/login' style={{ textDecoration: "none" }}>
                                Login
                            </Link>
                        </div></>
                }

            </div>
        </>
    )
}