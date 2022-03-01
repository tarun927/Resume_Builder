import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Styles/getstar.module.css'


export default function Getstart() {
  return (
    <div className={styles.gscontainer}>
      <div className={styles.gswrittencontainer}>
        <div className={styles.gswritten}>
          <div>
            <p style={{ color: "#a0a5dd" }}>3 SIMPLE STEPS</p>
            <h1>Getting Started</h1>
          </div>
          <div className={styles.gsmid}>
            <div className={styles.gsnumber1}>1</div>
            <div><p>Save time using pre-written bullets crafted by resume experts.</p></div>

          </div>
          <div className={styles.gsmid}>
            <div className={styles.gsnumber2}>2</div>
            <div><p>Select a recruiter approved template that will get your resume noticed.</p></div>

          </div>
          <div className={styles.gsmid}>
            <div className={styles.gsnumber3}>3</div>
            <div><p>Download or print your new resume!</p></div>

          </div>
          <Link to="/home" style={{textDecoration:"none"}}>
            <div className={styles.gsbutton}>CONTINUE</div>
          </Link>
        </div>
      </div>
      <div className={styles.gsimage}>
        {/* <img src="/images/getstart.svg" alt="not found" /> */}
      </div>
    </div>
  )
}
