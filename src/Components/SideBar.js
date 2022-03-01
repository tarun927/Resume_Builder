import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { finalChange, tempChange } from '../redux/action/action'
import styles from '../Styles/sideBar.module.css'
import Template1 from './Template1'
import Template2 from './Template2'
export default function SideBar({ open, setOpen }) {

    
    let dispatch = useDispatch()
    const handleClick=(a)=>{
        setOpen(false)
        dispatch(tempChange(a))
    }
    if (open) {
        return (
            <div className={styles.main_sidebar}>
                <div className={styles.sidebar}>
                    <div className={styles.twoRes}>

                        <div className={styles.singleContainer}>
                            <div className={styles.singleDiv} onClick={()=>handleClick(1)}>
                                <Template1 />
                            </div>      
                        </div>
                        <div className={styles.singleContainer}>
                            <div className={styles.singleDiv} onClick={()=>handleClick(2)}>
                                <Template2 />
                            </div>      
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return <></>
    }

}
