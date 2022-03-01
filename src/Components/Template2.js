import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styles1 from '../Styles/temp1.module.css'
import styles from '../Styles/temp2.module.css'

export default function Template2() {


    let finalState = useSelector(state => state.finalReducer)
    let tempColor = 'TempColor' + finalState.color
    let bgTempColor = 'BgTempColor' + finalState.color
    let layoutMargin = 'layoutM' + finalState.layout
    let fontSize = 'fontSize' + finalState.fontSize

    // let [arr,setArr] = useState(['css','html','dsa','sql','js'])
    let arr = ['css', 'html', 'dsa', 'sql', 'js']
    let leftArr = []
    let rightArr = []
    for (let i = 0; i < arr.length; i++) {
        if (i <= arr.length / 2) {
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i])
        }
    }

    return (
        <div className={styles1.Rpage} style={{ marginTop: "39px" }}>
            <div className={`${styles.container} ${fontSize}`}>

                <div className={`${styles.left} ${bgTempColor}`}>

                </div>
                <div className={styles.right}>

                </div>

                <div className={`${styles.layout} ${layoutMargin}`}>
                    <div className={`${styles.left1} ${bgTempColor}`}>
                        <div className={styles.name2}>
                            TARUN <br />SINGH
                        </div>
                        <div className={styles.belowName}>
                            gmail<br />
                            phone<br />
                            city<br />
                        </div>
                    </div>
                    <div className={styles.right1}>
                        <div className={styles.summary}>
                            <div className={`${styles.title} ${bgTempColor}`}>PROFESSIONAL SUMMARY</div>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ea ad ipsum cupiditate blanditiis saepe quae eveniet sed fugiat impedit ex necessitatibus amet odio tempore ab pariatur cum minus. Ex.
                            </div>
                        </div>
                        <div className={styles.skills}>
                            <div className={`${styles.title} ${bgTempColor}`}>SKILLS</div>
                            <div className={styles.parentSkillDiv}>
                                <div className={styles.leftSkills}>
                                    {leftArr.map(ele => <li>{ele}</li>)}
                                </div>
                                <div className={styles.rightSkills}>
                                    {rightArr.map(ele => <li>{ele}</li>)}
                                </div>
                            </div>
                        </div>
                        <div className={styles.experience}>
                            <div className={`${styles.title} ${bgTempColor}`}>
                                EXPERIENCE
                            </div>
                            Software Developer, Pepcoding Pvt Ltd, Feb 2020-Feb 2022,Delhi, India
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla inventore aliquam, quos architecto id deserunt possimus laudantium sed qui obcaecati blanditiis est maiores ab? Placeat blanditiis incidunt ea iste numquam!</li>
                        </div>
                        <div className={styles.education}>
                            <div className={`${styles.title} ${bgTempColor}`}>EDUCATION</div>
                            B-Tech <br />
                            Delhi Technological University, Delhi, India Feb 2021
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}