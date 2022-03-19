
import { collection, doc, onSnapshot, query, updateDoc, where } from '@firebase/firestore'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Sideresume from '../Components/Sideresume'
import Skillinput from '../Components/subComponents/Skillinput'
import { db } from '../firebase-config'
import { skillChange, userChange } from '../redux/action/action'
import styles from '../Styles/home.module.css'

export default function Skills() {
    var back = '< Back'
    
    let userState = useSelector(state=>state.userReducer)
    let skillState = useSelector(state => state.skillReducer)
    const [skillArr, setSkillArr] = useState(skillState)


    // const handleClick = () => {

    //     let skillNum = skillArr[skillArr.length - 1].num + 1
    //     setSkillArr([...skillArr, { num: skillNum, val: '' }])
    // }


    const handleClick = () => {
        let count = skillArr.length > 0 ? skillArr[skillArr.length - 1].num + 1 : 1;
        setSkillArr([...skillArr, { skill: "", num: count }]);
    };

    let dispatch = useDispatch();
    useEffect(() => {
       
        document.querySelector(".skillGlobal").style.border = "4px solid blue" ;
        document.querySelector(".skillGlobal").style.backgroundColor = "lightblue" ;

       // set userReducer from localStorage
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
               if ("skillReducer" in doc.data()){
                   dispatch(skillChange([ ...doc.data().skillReducer ]))
                   setSkillArr([ ...doc.data().skillReducer ])
               } 
           });
   
       });
   }, [userState])


      const handleUpdate=async()=>{
          if(userState.doc_id!=""){
              try{
                 var person = doc(db,"User_Info",userState.doc_id)
                 updateDoc(person,{
                     skillReducer:skillState
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
                        <h1 className="form-heading center" >Skills</h1>
                        <p>Add a few skills to show employers what you're good at.</p>
                    </div>
                    {
                        skillArr.map((each, idx) => <Skillinput each={each} idx={idx} key={each.num} skillArr={skillArr} setSkillArr={setSkillArr} />)
                    }
                    <div onClick={handleClick}>+Add New Skill</div>

                    <Link to="/summary"><div className={styles.button} onClick={handleUpdate}>
                        SAVE & CONTINUE
                    </div></Link>
                    <Link to="/education"> <div className={styles.back}> {back} </div> </Link>
                </div>

            </div>
            <Sideresume />
        </div>
    )
}