import React from 'react'
import Title from '../Title'
import s from './_portfolio.module.scss'
import * as RiCalendarEvent from "react-icons/ri";
import * as RiImage2Line from "react-icons/ri";
import fly from './../../assets/fly.jpg';
import wp from './../../assets/wp.jpg';
import sm from './../../assets/sm.png';
import th from './../../assets/th.png';
function  Portfolio () {
    const data = {
        title: "Portfolio.",
        icon: <RiCalendarEvent.RiCalendarEventLine/>
    }
    return (
        <div className={s.portfolio}>
            <div className={s.container}>
                <Title title={data.title} icon={data.icon}/>
                
                <div className={s.content}>

                    <div className={s.item}>
                        <img className={s.img} src={sm}/>

                        <a className={s.info} target="_blank" href="https://vitalik9135eb2.github.io/first/">
                            <div className={s.infoWrap}>
                                <span className={s.itemTitle}>Smoothie</span>

                                
                                    <span className={s.itemInfo}>First project</span>
                                
                                
                                <span className={s.icon}><RiImage2Line.RiImage2Line/></span>
                            </div>
                        </a>
                    </div>

                    <div className={s.item}>
                        <img className={s.img} src={fly}/>

                        <a className={s.info} target="_blank" href="https://vitalik9135eb2.github.io/HELYFLY/">
                            <div className={s.infoWrap}>
                                <span className={s.itemTitle}>Helefly</span>

                                
                                    <span className={s.itemInfo}>Project Rect</span>
                                
                                
                                <span className={s.icon}><RiImage2Line.RiImage2Line/></span>
                            </div>
                        </a>
                    </div>

                    <div className={s.item}>
                    </div>

                    <div className={s.item}>
                        <img className={s.img} src={wp}/>
                        <a className={s.info} target="_blank" href="https://vitalik9135eb2.github.io/Arhmove/">
                            <div className={s.infoWrap}>
                                <span className={s.itemTitle}>Arhmove</span>
                                <span className={s.itemInfo}>Project word press</span>
                                <span className={s.icon}><RiImage2Line.RiImage2Line/></span>
                            </div>
                        </a>
                    </div>

                    <div className={s.item}>
                        <img className={s.img} src={th}/>

                        <a className={s.info} target="_blank" href="https://vitalik9135eb2.github.io/Thrivetalk/">
                            <div className={s.infoWrap}>
                                <span className={s.itemTitle}>Thrivetalk</span>

                                
                                    <span className={s.itemInfo}>Project grid</span>
                                
                                
                                <span className={s.icon}><RiImage2Line.RiImage2Line/></span>
                            </div>
                        </a>
                    </div>

                    <div className={s.item}></div>

                    <div className={s.item}></div>

                    <div className={s.item}></div>

                </div>

            </div>
        </div>
    )
}
export default Portfolio;