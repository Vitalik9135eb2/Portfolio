import React from 'react';
import Title from '../Title';
import * as FiUser from "react-icons/fi";
import s from './_about.module.scss';
import photo from './../../assets/about3.jpg';


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
                        <p className={s.personalText}>
                            Welcome to my portfolio site. 
                            I am engaged in HTML-layout of sites. I have a completely cross-browser, responsive and valid layout. 
                            To ensure that the site layout requirements are met while working on a project, 
                            I use the Gulp project builder to automate the layout process, Less / Sass preprocessors,
                            Pixel Perfect for layout that matches the provided pixel-for-pixel layout, 
                            BEM and media queries for responsive site layout
                        </p>
                        
                        <div className={s.info}>
                            <table className={s.tableInfo}>
                                <tr className={s.string}>
                                    <td className={s.data}>Full name:</td>
                                    <td className={s.myData}>Vitalii Palcheuski</td>
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
                        </div>
                        

                        <a className={s.link} target="_blank" href="https://disk.yandex.by/i/4IBrTKq9XcXxcg" >Download CV</a>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default About
