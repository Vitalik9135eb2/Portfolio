import React from 'react';
import Title from '../Title';
import * as RiMail from "react-icons/ri";
import s from './_contact.module.scss';
import tel from './../../assets/tel.png';
import mail from './../../assets/mail.png';
import tg from './../../assets/tg.png';
import gh from './../../assets/github.png'


function Contact () {
    const data = {
        title: "My Contact",
        icon: <RiMail.RiMailSendLine/>
    }
    return (
        <div className={s.contact}>
            <div className={s.container}>
               <Title title={data.title} icon={data.icon}/>

                <div className={s.content}>


                    <div className={s.formWrap}>
                        <form className={s.form} action="#" method="post" name="feedbackForm">
                            <div className={s.inputsWrap}>
                                <div className={s.inputInner}>
                                    <input type="text" className={s.input} id="name"/>
                                    <label className={s.label} htmlFor="name" >Name<span className={s.red}>*</span></label>
                                </div>
                                <div className={s.inputInner}>
                                    <input type="text" className={s.input} id="email"/>
                                    <label className={s.label} htmlFor="email" >Email<span className={s.red}>*</span></label>
                                </div>
                            </div>

                            <div className={s.textareaWrap}>
                                <textarea name="text" className={s.textarea} id="massage"></textarea>
                                <label  className={s.label} htmlFor="massage">Enter you message <span className={s.red}>*</span></label>
                            </div>

                            <input className={s.send} type="submit" value="Send"/>

                        </form>



                    </div>


                    <div className={s.social} >
                            <a className={s.link} href="tel:+375333069140">
                                <img className={s.linkImg} src={tel}/>
                                <span>+375-33-306-91-40</span>
                            </a>

                            <a className={s.link} href="https://github.com/Vitalik9135eb2">
                                <img className={s.linkImg} src={gh}/>
                                <span>My GitHub</span>
                            </a>

                            <a className={s.link} href="mailto:05vp94@mail.ru">
                                <img className={s.linkImg} src={mail}/>
                                <span>05vp94@mail.ru</span>
                            </a>

                            <a className={s.link} href="https://t.me/VitaliiPalcheyski">
                                <img className={s.linkImg} src={tg}/>
                                <span>@VitaliiPalcheyski</span>
                            </a>

                    </div>
                    


                
                </div>
            </div>
            
        </div>
    )
}

export default Contact
