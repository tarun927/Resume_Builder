import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../Styles/sideresume.module.css'
import Template1 from './Template1'
// import namereducer from '../redux/reducer/namereducer'

export default function Sideresume() {

    let pname = useSelector((state) => state.namereducer)

    return (
        <div className={styles.srcontainer}>
            <div className={styles.srupper}>
                <img src="/images/resumebg.png" alt="nf" style={{width:"100%",height:"118%"}}/>
                <div className={styles.resumeimg}>
                    <div className={styles.personname}><p>{pname}</p></div>
                    <div className={styles.cropimg}>
                        <Template1/>
                    </div>
                </div>
            </div>
            <div className={styles.srlower}>
                <div className={styles.tips}>
                    <h3>Tips</h3>
                </div>
                <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae eligendi et, pariatur sit beatae consequuntur culpa facilis officiis quisquam, aperiam exercitationem totam nemo mollitia ratione in officia. Impedit, cum modi!
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
