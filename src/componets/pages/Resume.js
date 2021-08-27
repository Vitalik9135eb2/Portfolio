import React from 'react';
import Title from '../Title';
import * as RiFile from "react-icons/ri";
import s from './_resume.module.scss'


function Resume() {
    const data = {
        title: "My Resume",
        icon: <RiFile.RiFile3Line/>
    }
    return (
        <div className={s.resume}>
            <div className={s.container}>
               <Title title={data.title} icon={data.icon}/>

                <div className={s.content}>

                    <h3 className={s.contentTitle}>Skills</h3>    

                    <div className={s.items}>
                        
                        <div className={s.skills}>

                            <div className={s.wrap}>
                                <span className={s.itemTitle}>HTML5<span className={s.subTitle}>85%</span></span>  
                                <div className={s.progresBar}>
                                    <div className={`${s.fillHtml} ${s.fill}`}></div>
                                </div>
                            </div>

                            <div className={s.wrap}>
                                <span className={s.itemTitle}>CSS3<span className={s.subTitle}>75%</span></span>
                                <div className={s.progresBar}>
                                    <div className={`${s.fillCss} ${s.fill}`}></div>
                                </div>
                            </div>

                            <div className={s.wrap}>
                                <span className={s.itemTitle}>JavaScript<span className={s.subTitle}>30%</span></span>
                                <div className={s.progresBar}>
                                    <div className={`${s.fillJs} ${s.fill}`}></div>
                                </div>
                            </div>

                            <div className={s.wrap}>
                                <span className={s.itemTitle}>ReactJs<span className={s.subTitle}>10%</span></span>
                                <div className={s.progresBar}>
                                    <div className={`${s.fillReact} ${s.fill}`}></div>
                                </div>
                            </div>

                            <div className={s.wrap}>
                                <span className={s.itemTitle}>Photoshop<span className={s.subTitle}>40%</span></span>
                                <div className={s.progresBar}>
                                    <div className={`${s.fillPh} ${s.fill}`}></div>
                                </div>
                            </div>

                            <div className={s.wrap}>
                                <span className={s.itemTitle}>WordPress<span className={s.subTitle}>45%</span></span>
                                <div className={s.progresBar}>
                                    <div className={`${s.fillWp} ${s.fill}`}></div>
                                </div>
                            </div>

                        </div>


                        <div className={s.educationWrap}>

                            <h3 className={s.educationTitle}>Education/Experience</h3>

                            <div className={s.educationItem}>

                                <span className={s.date}>2011 - 2016</span>

                                <p className={s.text}>Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Quas, magni mollitia, 
                                    aspernatur consequatur accusamus vero eum facere exercitationem velit 
                                    suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.
                                </p>
                            
                            </div>
                            
                            <div className={s.educationItem}>

                                <span className={s.date}>February - Jule 2021</span>

                                <p className={s.text}>Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Quas, magni mollitia, 
                                    aspernatur consequatur accusamus vero eum facere exercitationem velit 
                                    suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.
                                </p>
                            
                            </div>

                        </div>


                        
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Resume
