import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { skillChange } from '../../redux/action/action';
import styles from '../../Styles/skills.module.css'

export default function Skillinput({ each, idx, skillArr, setSkillArr}) {
    const handleDelete=()=>{
        console.log(each.num);
        setSkillArr(skillArr.filter(ele=>ele.num!=each.num))
        
    }

    useEffect(() => {
      console.log(skillArr);
    }, [skillArr])
    
    // const [single,setSingle] = useState('')
    const handleChange=(e)=>{
        let arr = [...skillArr]
        // console.log(e.target.id);
        // setSingle(e.target.value)
        // let a = e.target.value;
        arr[e.target.id].skill = e.target.value
        setSkillArr(arr)
    }

    let dispatch = useDispatch()
    useEffect(() => {
      dispatch(skillChange(skillArr))
    }, [skillArr])
    
    
    return (
        <div>
            <input value={skillArr[idx].skill} type="text" placeholder={'Skill #' + (idx+1)} id={idx} className={styles.skillin} onChange={handleChange}/>
            <span onClick={()=>handleDelete()}>✖</span>
        </div>


    )
}
