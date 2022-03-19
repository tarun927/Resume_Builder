
import { doc, updateDoc } from '@firebase/firestore'
import { getFirestore, onSnapshot, where, collection, query } from "firebase/firestore";
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Sideresume from '../Components/Sideresume'
import { db } from '../firebase-config'
import { summaryChange, userChange } from '../redux/action/action'


import styles from '../Styles/home.module.css'
import styles1 from '../Styles/workexp.module.css'

export default function Skills() {
    var back = '< Back'

    let userState = useSelector(state=>state.userReducer)
    let summState =  useSelector(state=>state.summaryReducer)
    let [summ,setSumm] = useState(summState)

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
               if ("summReducer" in doc.data()){
                   dispatch(summaryChange(doc.data().summReducer))
                   setSumm(doc.data().summReducer)
               } 
           });
   
       });
   }, [userState])

      const handleUpdate=async()=>{
          if(userState.doc_id!=""){
              try{
                  var person = doc(db,"User_Info",userState.doc_id)
                  await updateDoc(person,{
                      summReducer:summState
                  })
              }catch(error){
                  console.log(error);
              }
          }
      }

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
                        <textarea className="first" onChange={(e)=>handleChange(e)} name="" id="" cols="61" rows="20" value={summ}></textarea>
                    </div>
                    
                    <Link to="/final"><div  className={styles.button} onClick={handleUpdate}>
                        SAVE & CONTINUE
                    </div></Link>
                    <Link to="/Skills"> <div  className={styles.back}> {back} </div> </Link>
                </div>

            </div>
            <Sideresume />
        </div>
    )
}