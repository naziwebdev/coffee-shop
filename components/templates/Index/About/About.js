import React from 'react'
import styles from './About.module.css'
import { MdOutlineDone } from 'react-icons/md'

export default function About() {
    return (
        <div className={styles['about']}>
            <h3 className='u__section-title'>
                about us
            </h3>
            <h1 className='u__section-text'>
                serving since 1950
            </h1>
            <div className={styles['about__content']}>
                <div className={styles['about__story']}>
                    <h3 className={styles['about__title']}>
                        our story
                    </h3>
                    <h5 className={styles['about__story-text']}>
                        Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet
                        sed vero dolor sea
                    </h5>
                    <p className='u__desc'>
                        Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
                        nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet
                        no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit
                        ut. Labor diam sed ipsum et eirmod
                    </p>
                    <button className={`${styles['about__btn']} ${styles['about__btn--1']}`}>
                        learn more
                    </button>
                </div>
                <div className={styles['about__img-box']}>
                    <img src='/images/about.png' className={styles['about__img']} alt='about' />
                </div>
                <div className={styles['about__vision']}>
                    <h3 className={styles['about__title']}>
                        our Vision
                    </h3>
                    <p className='u__desc'>
                        Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
                        nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet
                        no.Labor diam sed ipsum et eirmod
                    </p>
                    <ul className={styles['about__vision-list']}>
                        <li className={styles['about__vision-item']}>
                            <MdOutlineDone className={styles['about__vision-icon']}/>
                            <span>lorem ipsum dolor sit amet</span>
                        </li>
                        <li className={styles['about__vision-item']}>
                            <MdOutlineDone className={styles['about__vision-icon']}/>
                            <span>lorem ipsum dolor sit amet</span>
                        </li>
                        <li className={styles['about__vision-item']}>
                            <MdOutlineDone className={styles['about__vision-icon']}/>
                            <span>lorem ipsum dolor sit amet</span>
                        </li>
                    </ul>
                    <button className={`${styles['about__btn']} ${styles['about__btn--2']}`}>
                        learn more
                    </button>
                </div>
            </div>
        </div>
    )
}
