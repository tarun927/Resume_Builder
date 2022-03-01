
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Sideresume from '../Components/Sideresume'
import Month from '../Components/subComponents/Month'
import Year from '../Components/subComponents/Year'
import { workChange } from '../redux/action/action'

import styles from '../Styles/home.module.css'
import styles1 from '../Styles/workexp.module.css'

export default function Workexp() {
    var back = '< Back'
    let formstate = useSelector(state=>state.workReducer)
    
    let [workform,setWorkform] = useState(formstate);
    
    const handleChange = (e)=>{
        let {value,name} = e.target;
        if(name=='jobT'){
            setWorkform({...workform,job:value})
        }else if(name=='comp'){
            setWorkform({...workform,company:value})
        }else if(name=='city'){
            setWorkform({...workform,city:value})
        }else if(name=='country'){
            setWorkform({...workform,country:value})
        }else if(name=='jobDesc'){
            setWorkform({...workform,jobDesc:value})
        }
    }

    

    useEffect(() => {
        document.querySelector(".first").focus();
       
        document.querySelector(".workGlobal").style.border = "4px solid blue" ;
        document.querySelector(".workGlobal").style.backgroundColor = "lightblue" ;
      }, [])

      let dispatch = useDispatch()
      useEffect(() => {
        dispatch(workChange(workform))
      }, [workform])
      
    return (
        <div className={styles.hcontainer}>
            <div className={styles.formcard}>

                <div>
                    <div className={styles.headings}>
                        <h1 className="form-heading center" >Work Experience</h1>
                        <p>Start with your most recent position.</p>
                    </div>

                    <div className="input">
                        <label htmlFor="">Job Title</label><br />

                        <input type="text" name="jobT" value={workform.job} className={`first ${styles.full}`} onChange={(e)=>handleChange(e)}/>
                    </div>
                    <div className="input">
                        <label htmlFor="">Company</label><br />
                        <input type="text" name="comp" value={workform.company} className={styles.full} onChange={(e)=>handleChange(e)}/>
                    </div>
                    <div className="input" className={styles1.twoInone}>
                        <div>
                            <label htmlFor="">City</label><br />
                            <input type="text" name="city" value={workform.city} className={styles1.halfinline} onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div>
                            <label htmlFor="">Country</label><br />
                            <input type="text" name="country" value={workform.country} className={styles1.halfinline} onChange={(e)=>handleChange(e)}/>
                        </div>
                    </div>
                    <div className="input" className={styles1.twoInone}>
                        <div>
                            <label htmlFor="">Start Date</label><br />
                            <Month  key={1} id={'startMonth'} form={workform} setform={setWorkform}/>
                        </div>
                        <div>
                            <label htmlFor=""></label><br />
                            <Year  key={1} id={'startYear'} form={workform} setform={setWorkform}/>
                        </div>
                    </div>
                    <div className="input" className={styles1.twoInone}>
                        <div>
                            <label htmlFor="">End Date</label><br />
                            <Month key={2} id={'endMonth'} form={workform} setform={setWorkform}/>
                        </div>
                        <div>
                            <label htmlFor=""></label><br />
                            <Year key={2} id={'endYear'} form={workform} setform={setWorkform}/>
                        </div>
                    </div>
                    <div className="input">
                        <label htmlFor="">Job Description</label><br />
                        <textarea name="jobDesc" id="" value={workform.jobDesc} cols="61" rows="20" onChange={(e)=>handleChange(e)}></textarea>
                    </div>
                    <Link to="/education"><div className={styles.button} >
                        SAVE & CONTINUE
                    </div></Link>
                    <Link to="/Home"> <div className={styles.back}> {back} </div> </Link>
                </div>

            </div>
            <Sideresume />
            
        </div>
    )
}
