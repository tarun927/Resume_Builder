import React, { useEffect, useState, useRef } from 'react'
import { useReactToPrint } from 'react-to-print';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import SideBar from '../Components/SideBar'
import Template1 from '../Components/Template1'
import Template2 from '../Components/Template2'
import { eduChange, finalChange, homeChange, skillChange, summaryChange, userChange, workChange } from '../redux/action/action'
import styles from '../Styles/final.module.css'
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import GenericPdfDownloader from '../Components/subComponents/GenericPdfDownloader';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { collection, doc, onSnapshot, query, updateDoc, where } from '@firebase/firestore';
import { db } from '../firebase-config';


export default function Final() {

    // let homestate = useSelector(state => state.homeReducer)
    // const homeArr = Object.keys(homestate).map(key =>
    //     <div >{key}:{homestate[key]}</div>
    // )

    // let workstate = useSelector(state => state.workReducer)
    // const workArr = Object.keys(workstate).map(key =>
    //     <div >{key}:{workstate[key]}</div>
    // )

    // let edustate = useSelector(state => state.eduReducer)
    // const eduArr = Object.keys(edustate).map(key =>
    //     <div >{key}:{edustate[key]}</div>
    // )


    // const printRef = React.useRef();

    // const handleDownloadPdf = async () => {
    //   const element = printRef.current;
    //   console.log(element);
    //   const canvas = await html2canvas(element);
    //   const data = canvas.toDataURL('image/png');

    //   const pdf = new jsPDF();
    //   const imgProperties = pdf.getImageProperties(data);
    //   const pdfWidth = pdf.internal.pageSize.getWidth();
    //   const pdfHeight =
    //     (imgProperties.height * pdfWidth) / imgProperties.width;

    //   pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    //   pdf.save('print.pdf');
    // };
    const exportPdf = () => {

        htmlToImage.toPng(document.getElementById('capture'), { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'my-image-name.jpeg';
                const pdf = new jsPDF();
                const imgProps = pdf.getImageProperties(dataUrl);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save("download.pdf");
            });

    }

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    let colorArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let [sideOpen, setSideOpen] = useState(false)

    let userState = useSelector(state=>state.userReducer)
    let finalState = useSelector(state => state.finalReducer)
    let templateState = useSelector(state => state.templateReducer)
    let [finalForm, setFinalForm] = useState(finalState)
    let dispatch = useDispatch()

    const ColorClick = (a) => {
        // console.log(a);
        let obj = { ...finalForm, color: a }
        console.log("template", finalForm.template);
        setFinalForm(obj)
        console.log(obj);

    }
    const layoutClick = (a) => {
        setFinalForm({ ...finalForm, layout: a })
    }
    const handleEvents = (e) => {
        let { value, name } = e.target
        console.log(value, name);
        setFinalForm({ ...finalForm, [name]: value })
    }

    useEffect(()=>{
        if (JSON.parse(localStorage.getItem('userReducer')) != null) {
            dispatch(userChange(JSON.parse(localStorage.getItem('userReducer'))))
        }
        console.log(finalState)
    },[])
    useEffect(() => {
        //get data on change of userReducer
        const q = query(collection(db, "User_Info"), where("email", "==", userState.email));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {

            querySnapshot.forEach((doc) => {
                if ("finalReducer" in doc.data()) {
                    dispatch(finalChange({ ...doc.data().finalReducer }))
                    setFinalForm({ ...doc.data().finalReducer })
                }
                if ("homeReducer" in doc.data()) {
                    dispatch(homeChange({ ...doc.data().homeReducer }))
                }
                if ("workReducer" in doc.data()){
                    dispatch(workChange({ ...doc.data().workReducer }))
                } 
                if ("eduReducer" in doc.data()){
                    dispatch(eduChange({ ...doc.data().eduReducer }))
                } 
                if ("skillReducer" in doc.data()){
                    dispatch(skillChange([ ...doc.data().skillReducer ]))
                } 
                if ("summReducer" in doc.data()){
                    dispatch(summaryChange(doc.data().summReducer))
                } 
            });

        });
    }, [userState])


    useEffect(async () => {
        console.log(finalForm);
        dispatch(finalChange(finalForm))
        
       // update in firebase
        try {
            var person = doc(db,"User_Info",userState.doc_id)
            await updateDoc(person,{
                finalReducer:finalForm
            })
            console.log("updated final")
        } catch (error) {
            console.log(error);
        }

    }, [finalForm])

   



    return (
        <div className={styles.FinContainer}>
            <div id="capture" className={styles.ResumeBody} ref={componentRef}>

                {templateState == 1 ? <Template1 /> : templateState == 2 ? <Template2 /> : <></>}
                {/* <Template1/> */}


            </div>

            <SideBar open={sideOpen} setOpen={setSideOpen} />

            <div className={styles.RightContainer}>
                <div className={styles.headings}>
                    <h1 className="form-heading center" >Here's Your Resume!</h1>
                    <p>What do you want to do next?</p>
                </div>
                <div className={styles.buttons}>
                    Export options:
                    <div className={styles.down} onClick={exportPdf}><b> Download</b></div>
                    <div className={styles.print} onClick={handlePrint}><b>Print</b></div>
                    <div className={styles.email}><b>Email</b></div>
                </div>
                <div className={styles.buttons}>
                    Formatting options:
                    <div>
                        Layout
                        <div className={styles.layout}>
                            <div className={styles.laybutton} onClick={() => layoutClick(1)}>CONDENSED</div>
                            <div className={styles.laybutton} onClick={() => layoutClick(2)}>STANDARD</div>
                            <div className={styles.laybutton} onClick={() => layoutClick(3)}>EXPANDED</div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.layout}>
                            <div>Font Style
                                <div>
                                    <select className={styles.fontbutton} id="">
                                        <option value="">Select</option>
                                    </select>
                                </div>
                            </div>
                            <div>Font Size
                                <div>
                                    <select onChange={(e) => handleEvents(e)} className={styles.fontbutton} name="fontSize" id="">
                                        <option value="2">Medium</option>
                                        <option value="1">Small</option>
                                        <option value="3">Large</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.colorDiv}>
                        Colors
                        <div className={styles.layout}>
                            {
                                colorArr.map((ele, idx) =>
                                    <button className={`${styles.color} BgTempColor${ele}`} onClick={(a) => ColorClick(ele)}></button>
                                )
                            }

                        </div>
                    </div>

                </div>
                <div className={styles.buttons}>
                    <div onClick={() => setSideOpen(true)} className={`${styles.down} ${styles.temp}`}><b>Change Template</b></div>

                </div>

            </div>
        </div>
    )
}

{/* <b>Home</b> :{homeArr}
        <b>Work Exp</b>:{workArr}
        <b>Education</b>:{eduArr} */}
