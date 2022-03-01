import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Sideresume from '../Components/Sideresume'
import { homeChange, namechange } from '../redux/action/action'
import styles from '../Styles/home.module.css'

export default function Home() {
    var back = '< Back'
    const dispatch = useDispatch()

    let nameState = useSelector(state=>state.namereducer)
    const [namein,setnamein] = useState(nameState)
    // const setfun=(x)=>{
    //     dispatch(namechange(x));
    // }
    

    
    let formstate = useSelector(state=>state.homeReducer)
   
    const [form,setForm] = useState(formstate)
    // const formfun=()=>{
    //     dispatch(homeChange(form))
    // }

    useEffect(() => {
        dispatch(homeChange(form))
    }, [form])
    useEffect(() => {
        dispatch(namechange(namein));
    }, [namein])
    
   useEffect(() => {
     document.querySelector(".first").focus();
    
     document.querySelector(".nameGlobal").style.border = "4px solid blue" ;
     document.querySelector(".nameGlobal").style.backgroundColor = "lightblue" ;
   }, [])
   
    return (
        <div className={styles.hcontainer}>
        <div className={styles.formcard}>

            <div>
                <div className={styles.headings}>
                    <h1 className="form-heading center" >Tell us about Yourself</h1>
                    <p>With this info, recruiters will be able to find you.</p>
                </div>

                <div className="input">
                    <label htmlFor="">Name</label><br />

                     <input type="text" value={form.name} className={`${styles.full} first`} onChange={(e)=>(setnamein(e.target.value),setForm({...form,name:e.target.value}) )} />  {/*,setfun(namein) onMouseLeave={()=>setfun(namein)}*/}
                </div>
                <div className="input">
                    <label htmlFor="">Email</label><br />
                    <input type="text" value={form.email} className={styles.half} onChange={(e)=>setForm({...form,email:e.target.value,name:namein})}/>  <input type="checkbox" /> Don't Show on my Resume
                </div> 
                <div className="input">
                    <label htmlFor="">Street address</label><br />
                    <input type="text" value={form.address} className={styles.full} onChange={(e)=>setForm({...form,address:e.target.value})}/>
                </div>
                <div className="input">
                    <label htmlFor="">City</label><br />
                    <input type="text" value={form.city} className={styles.half} onChange={(e)=>setForm({...form,city:e.target.value})} />
                </div>
                <div className="input">
                    <label htmlFor="">Country</label><br />
                    <input type="text" value={form.country} className={styles.full} onChange={(e)=>setForm({...form,country:e.target.value})}/>
                </div>
                <div className="input">
                    <label htmlFor="">Phone Number</label><br />
                    <input type="text" value={form.phone} className={styles.half} onChange={(e)=>setForm({...form,phone:e.target.value})}/>
                </div>
                
                
               <Link to="/work" > <div className={styles.button} >
                    SAVE & CONTINUE
                </div> </Link>
               <Link to="/"> <div className={styles.back}> {back} </div> </Link>
            </div>

        </div>
        <Sideresume/>
        </div>
    )
}







