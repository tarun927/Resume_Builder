import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { eduChange } from '../../redux/action/action'
import styles from '../../Styles/home.module.css'

export default function Month({id,form,setform}) {      //workform and eduForm
 
    

    const handleChange=(e)=>{
       
            setform({
            ...form,
            [id]:e.target.value
           })
    }

    return (
        <select name=""   className={styles.half} value={form[id]} onChange={(e)=>handleChange(e)} >
            <option value="Month">Month</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
        </select>
    )
}
