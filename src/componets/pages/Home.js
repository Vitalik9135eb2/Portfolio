import React from 'react'
import s from './_home.module.scss'

function Home() {
    return (
        <div className={s.main}>
         <div className={s.content}>
            <div className={s.content__container}>
                <p className={s.content__container__text}>
                Hello my name is Vitalii, i am :
                </p>
                
                <ul className={s.content__container__list}>
                    <li className={s.content__container__list__item}>Purposeful</li>
                    <li className={s.content__container__list__item}>Web developer !</li>
                    <li className={s.content__container__list__item}>and</li>
                    <li className={s.content__container__list__item}>Freelanser !</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Home
