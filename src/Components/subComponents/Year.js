import React, { useEffect } from 'react'
import styles from '../../Styles/home.module.css'

export default function Year({id,form,setform}) {

    
          let arr = [];
            for(let i = 1930; i <= 2021; i++) {
                 arr.push(i);   
             }
         
     const handleChange = (e) =>{
        setform({...form,[id]:e.target.value})

     }

    return (
        <select name=""  value={form[id]} className={styles.half} onChange={(e)=>handleChange(e)}>
            <option value="">Year</option>
           {
              arr.map((i)=>{
                  return <option value={i} >{i}</option>
              })
           }
        </select>
    )
}
