
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Sideresume from '../Components/Sideresume'
import Skillinput from '../Components/subComponents/Skillinput'
import styles from '../Styles/home.module.css'

export default function Skills() {
    var back = '< Back'

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

    useEffect(() => {
       
        document.querySelector(".skillGlobal").style.border = "4px solid blue" ;
        document.querySelector(".skillGlobal").style.backgroundColor = "lightblue" ;
      }, [])
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

                    <Link to="/summary"><div className={styles.button}>
                        SAVE & CONTINUE
                    </div></Link>
                    <Link to="/education"> <div className={styles.back}> {back} </div> </Link>
                </div>

            </div>
            <Sideresume />
        </div>
    )
}