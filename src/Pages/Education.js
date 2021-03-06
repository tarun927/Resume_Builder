
import { doc, updateDoc } from '@firebase/firestore'
import { getFirestore, onSnapshot, where, collection, query } from "firebase/firestore";
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Sideresume from '../Components/Sideresume'
import Month from '../Components/subComponents/Month'
import Year from '../Components/subComponents/Year'
import { db } from '../firebase-config'
import { eduChange, userChange } from '../redux/action/action'


import styles from '../Styles/home.module.css'
import styles1 from '../Styles/workexp.module.css'

export default function Education() {
    var back = '< Back'
    
    let userState = useSelector(state=>state.userReducer)
    let eduState = useSelector(state=>state.eduReducer)
    const [eduForm,seteduForm] = useState(eduState)
    
    const handleChange=(e)=>{
        let {name,value} = e.target
        seteduForm({...eduForm,[name]:value})
    }

    let dispatch = useDispatch()
    useEffect(() => {
      dispatch(eduChange(eduForm))
        console.log(eduForm);
    }, [eduForm])
    
    
    useEffect(() => {
        document.querySelector(".first").focus();
       
        document.querySelector(".eduGlobal").style.border = "4px solid blue" ;
        document.querySelector(".eduGlobal").style.backgroundColor = "lightblue" ;

         //setting userReducer from localStorage
         if (JSON.parse(localStorage.getItem('userReducer')) != null) {
            dispatch(userChange(JSON.parse(localStorage.getItem('userReducer'))))
            console.log(JSON.parse(localStorage.getItem('userReducer')));
        }
      }, [])

      useEffect(() => {
        //get from fireBase
       const q = query(collection(db, "User_Info"), where("email", "==", userState.email));
       const unsubscribe = onSnapshot(q, (querySnapshot) => {
   
           querySnapshot.forEach((doc) => {
               if ("eduReducer" in doc.data()){
                   dispatch(eduChange({ ...doc.data().eduReducer }))
                   seteduForm({ ...doc.data().eduReducer })
               } 
           });
   
       });
   }, [userState])

      const handleUpdate=async ()=>{
           if(userState.doc_id!=""){
                try {
                    var person = doc(db,"User_Info",userState.doc_id)
                    await updateDoc(person,{
                        eduReducer:eduState
                    })
                } catch (error) {
                    console.log(error);
                }
           }
      }
    return (
        <div className={styles.hcontainer}>
            <div className={styles.formcard}>

                <div>
                    <div className={styles.headings}>
                        <h1 className="form-heading center" >Education</h1>
                        <p>Start with your most recent educational institution.</p>
                    </div>

                    <div className="input">
                        <label htmlFor="">School Name</label><br />

                        <input type="text" name="school" value={eduForm.school} className={`first ${styles.full}`} onChange={(e)=>handleChange(e)}/>
                    </div>
                    <div className="input" className={styles1.twoInone}>
                        <div>
                            <label htmlFor="">City</label><br />
                            <input type="text" name="city" value={eduForm.city} className={styles1.halfinline} onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div>
                            <label htmlFor="">Country</label><br />
                            <input type="text" name="country" value={eduForm.country} className={styles1.halfinline} onChange={(e)=>handleChange(e)}/>
                        </div>
                    </div>
                    <div className="input">
                        <label htmlFor="">Degree</label><br />
                        <input type="text" name="degree" value={eduForm.degree} className={styles.full} onChange={(e)=>handleChange(e)} />
                    </div>
                    <div className="input" className={styles1.twoInone}>
                        <div>
                            <label htmlFor="">Graduation Date</label><br />
                            <Month key={3} id={'eduMonth'} form={eduForm} setform={seteduForm}/>
                        </div>
                        <div>
                            <label htmlFor=""></label><br />
                            <Year key={3} id={'eduYear'} form={eduForm} setform={seteduForm}/>
                        </div>
                    </div>
                    
                    <Link to="/skills"><div className={styles.button} onClick={handleUpdate}>
                        SAVE & CONTINUE
                    </div></Link>
                    <Link to="/work"> <div className={styles.back}> {back} </div> </Link>
                </div>
 
            </div>
            <Sideresume />
        </div>
    )
}