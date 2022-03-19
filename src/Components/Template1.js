import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../Styles/temp1.module.css'
export default function Template1() {


    let finalState = useSelector(state => state.finalReducer)
    let { homeReducer, namereducer, summaryReducer, skillReducer,eduReducer,workReducer } = useSelector(state => state)
    let tempColor = 'TempColor' + finalState.color
    let bgTempColor = 'BgTempColor' + finalState.color
    let layoutMargin = 'layoutM' + finalState.layout
    let fontSize = 'fontSize' + finalState.fontSize

    let l = skillReducer.length;
    let arr1 = skillReducer.slice(0,Math.floor(l/3)+1)
    let arr2 = skillReducer.slice(Math.floor(l/3)+1,2*Math.floor(l/3)+2)
    let arr3 = skillReducer.slice(2*Math.floor(l/3)+2)
  
    

    let nameArr = homeReducer.name.split(' ')
    return (
        <div className={styles.Rpage} >
            <div className={`${layoutMargin} ${fontSize}`} >
                <div className={`nameGlobal ${styles.homeInfo}`}>
                    <div className={`${styles.nameSec}`}>
                        <div className={`BgTempColor ${bgTempColor}`}  >
                            <div className={styles.firstN}>{nameArr.length > 0 ? nameArr[0][0] : ''}</div>
                            <svg height="62" width="65" style={{ marginTop: "-4vh" }}>
                                <line x1="65" y1="7" x2="10" y2="65" style={{ stroke: "white", strokeWidth: 2 }} />
                            </svg>
                            <div className={styles.lastN}>{nameArr.length > 1 ? nameArr[1][0] : ''}</div>
                        </div>
                        <div className={styles.nameWritten}>
                            {nameArr[0]}<br /> {nameArr[1]}
                        </div>
                    </div>
                    <div>
                        {homeReducer.city}, {homeReducer.country} , {homeReducer.phone} , {homeReducer.email}
                    </div>
                </div>
                <div className={`summaryGlobal ${styles.summaryInfo}`}>
                    <b className={tempColor}>PROFESSIONAL SUMMARY</b>
                    <div>{summaryReducer}</div>
                </div>
                <div className={`skillGlobal ${styles.skilInfo}`}>
                    <b className={tempColor}>SKILLS</b>
                    <div className={styles.skillParent}>
                        <div>
                            {arr1.map(ele => <li>{ele.skill}</li>)}
                        </div>
                        <div>
                            {arr2.map(ele => <li>{ele.skill}</li>)}
                        </div>
                        <div>
                            {arr3.map(ele => <li>{ele.skill}</li>)}
                        </div>
                    </div>
                </div>
                <div className={`workGlobal ${styles.workInfo}`}>
                    <b className={` ${tempColor}`}>WORK EXPERIENCE</b>
                    <div>
                         <div>{workReducer.job+'at'}:{workReducer.company},{workReducer.country},{workReducer.city}</div>
                         <div>{workReducer.startMonth},{workReducer.startYear} to {workReducer.endMonth},{workReducer.endYear}</div>
                        <div>{workReducer.jobDesc}</div>
                    </div>
                </div>
                <div className={`eduGlobal ${styles.eduInfo}`}>
                    <b className={tempColor}>EDUCATION</b>
                    <div>
                         <div>{eduReducer.school+'at'}:{eduReducer.city},{eduReducer.country}</div>
                         <div>{eduReducer.degree} {eduReducer.eduMonth},{eduReducer.eduYear}</div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

// school:"",
// city:"",
// country:"",
// degree:"",
// eduMonth:"",
// eduYear:""
