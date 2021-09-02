import React from 'react';
import Title from '../Title';
import * as FiUser from "react-icons/fi";
import s from './_about.module.scss';
import photo from './../../assets/about1.jpg';


function About() {
    const data = {
        title: "About Me",
        icon: <FiUser.FiUserCheck/>
    }
    return (
        <div className={s.about}>
            <div className={s.container}>
               <Title title={data.title} icon={data.icon}/>

                <div className={s.content}>
                    <div className={s.imgWrap} >
                        <img src={photo}/>
                    </div>
                    <div className={s.personal} >
                        <h4 className={s.personalTitle}> I am <span className={s.name}>Vitalii Palcheuski</span></h4>
                        <p className={s.personalText}>I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more  more interactive with web animations.</p>
                        
                        <div className={s.info}>
                            <table className={s.tableInfo}>
                                <tr className={s.string}>
                                    <td className={s.data}>Full name:</td>
                                    <td className={s.myData}>Vitali Palcheuki</td>
                                </tr>
                                <tr className={s.string}>
                                    <td className={s.data}>Age:</td>
                                    <td className={s.myData}>27</td>
                                </tr>
                                <tr className={s.string}>
                                    <td className={s.data}>Nationality:</td>
                                    <td className={s.myData}>Belarusian</td>
                                </tr>
                                <tr className={s.string}>
                                    <td className={s.data}>Language:</td>
                                    <td className={s.myData}>Russian, Inglish(B1)</td>
                                </tr>
                                <tr className={s.string}>
                                    <td className={s.data}>Address:</td>
                                    <td className={s.myData}>city Minsk</td>
                                </tr>
                                <tr className={s.string}>
                                    <td className={s.data}>Freelance:</td>
                                    <td className={s.myData}>Available</td>
                                </tr>
                            </table>
                            {/* <span className={s.span}> Full name:<strong>Vitali Palcheuki</strong></span>
                            <span className={s.span}>Age:<strong>27</strong></span>
                            <span className={s.span}>Nationality:<strong>Belarusian</strong></span>
                            <span className={s.span}>Language:<strong>Russian, Inglish(B1)</strong></span>
                            <span className={s.span}>Address:<strong>city Minsk</strong></span>
                            <span className={s.span}>Freelance:<strong>Available</strong></span> */}
                        </div>
                        

                        <a className={s.link} href="#" >Download CV</a>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default About
