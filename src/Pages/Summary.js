
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Sideresume from '../Components/Sideresume'
import { summaryChange } from '../redux/action/action'


import styles from '../Styles/home.module.css'
import styles1 from '../Styles/workexp.module.css'

export default function Skills() {
    var back = '< Back'
    let [summ,setSumm] = useState('')

    const handleChange=(e)=>{

        setSumm(e.target.value)
    }

    let dispatch = useDispatch()
  
        
    useEffect(() => {
      dispatch(summaryChange(summ))
    }, [summ])
    

    useEffect(() => {
        document.querySelector(".first").focus();
       
        document.querySelector(".summaryGlobal").style.border = "4px solid blue" ;
        document.querySelector(".summaryGlobal").style.backgroundColor = "lightblue" ;
      }, [])

    return (
        <div className={styles.hcontainer}>
            <div className={styles.formcard}>

                <div>
                    <div className={styles.headings}>
                        <h1 className="form-heading center" >Summary</h1>
                        <p>Briefly describe your skills,
                             background and experience.</p>
                    </div>

                    <div className="input">
                        <textarea className="first" onChange={(e)=>handleChange(e)} name="" id="" cols="61" rows="20"></textarea>
                    </div>
                    
                    <Link to="/final"><div  className={styles.button}>
                        SAVE & CONTINUE
                    </div></Link>
                    <Link to="/Skills"> <div  className={styles.back}> {back} </div> </Link>
                </div>

            </div>
            <Sideresume />
        </div>
    )
}