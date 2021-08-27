import React from 'react'
import s from './_title.module.scss'


function Title(props) {
    return (
        <div className={s.titleWrap}>
            <h2 className={s.title}>{props.title}</h2>
            <span className={s.icon}>{props.icon}</span>
        </div>
    )
}



export default Title

