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
                                <span className={s.itemTitle}>JavaScript<span className={s.subTitle}>50%</span></span>
                                <div className={s.progresBar}>
                                    <div className={`${s.fillJs} ${s.fill}`}></div>
                                </div>
                            </div>

                            <div className={s.wrap}>
                                <span className={s.itemTitle}>React Js<span className={s.subTitle}>30%</span></span>
                                <div className={s.progresBar}>
                                    <div className={`${s.fillReact} ${s.fill}`}></div>
                                </div>
                            </div>

                        </div>


                        <div className={s.educationWrap}>

                            <h3 className={s.educationTitle}>Education/Experience</h3>

                            <div className={s.educationItem}>

                                <span className={s.date}>2011 - ...</span>

                                <p className={s.text}>
                                    Graduated from Polotsk State University in the field of law.
                                    After graduation, I work in my specialty.
                                </p>
                            
                            </div>
                            
                            <div className={s.educationItem}>
                                <span className={s.date}>Jule 2020 - February 2021</span>
                                <p className={s.text}>
                                    I started to study frontend development on my own. Made simple one-page sites without using JS, 
                                    animations and preprocessors.
                                </p>
                            </div>

                            <div className={s.educationItem}>
                                <span className={s.date}>February - June 2021 </span>
                                <p className={s.text}>
                                    Сontinued studying frontend development at the online school "IT-INCUBATOR".For 5 months of training, 
                                    I deepened my knowledge in html and css.
                                    I learned how to do cross-browser valid layouts, and also studied SASS / LESS preprocessors,
                                    the Gulp project builder, native JS and worked in a team with front-end developers on a project 
                                    in React JS.
                                </p>
                            </div>

                            <div className={s.educationItem}>
                                <span className={s.date}>June - November 2021</span>
                                <p className={s.text}>
                                    After training, I consolidated my knowledge in site layout,
                                    I independently mastered the JQ library and went deep into the study of React and Vue JS.<br/>
                                    I improve my knowledge of English through online courses.
                                </p>
                            </div>

                            <div className={s.educationItem}>
                                <span className={s.date}>November 2021 - ...</span>
                                <p className={s.text}>
                                    I work for Gamenet a.s..
                                    I am engaged in HTML-layout of programm interfise and writing simple scripts in native js.
                                    Sometimes I take freelance layout orders.
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
