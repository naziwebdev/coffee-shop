import React from 'react'
import styles from './Reservation.module.css'
import { MdOutlineDone } from 'react-icons/md'

export default function Reservation() {
    return (
        <div className={styles['reserve']}>
            <div className={styles['reserve__wrapper']}>
                <div className={styles['reserve__info']}>
                    <h1 className={styles['reserve__info-title']}>
                        30% off
                    </h1>
                    <h3 className={styles['reserve__info-subTitle']}>
                        for online reservation
                    </h3>
                    <p className={styles['reserve__info-text']}>
                        Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no.Labor diam sed ipsum et eirmod
                    </p>
                    <ul className={styles['reserve__info-list']}>
                        <li className={styles['reserve__info-item']}>
                            <MdOutlineDone className={styles['reserve__info-icon']} />
                            <span>lorem ipsum dolor sit amet</span>
                        </li>
                        <li className={styles['reserve__info-item']}>
                            <MdOutlineDone className={styles['reserve__info-icon']} />
                            <span>lorem ipsum dolor sit amet</span>
                        </li>
                        <li className={styles['reserve__info-item']}>
                            <MdOutlineDone className={styles['reserve__info-icon']} />
                            <span>lorem ipsum dolor sit amet</span>
                        </li>
                    </ul>
                </div>
                <div className={styles['reserve__book']}>
                    <h2 className={styles['reserve__book-title']}>book your table</h2>
                    <form className={styles['reserve__book-form']}>
                        <input type='text' className={styles['reserve__book-input']}
                            placeholder='Name' />
                        <input type='email' className={styles['reserve__book-input']}
                            placeholder='Emeil' />
                        <input type='text' className={styles['reserve__book-input']}
                            placeholder='Date' />
                        <input type='text' className={styles['reserve__book-input']}
                            placeholder='Time' />
                        <input type='number' className={styles['reserve__book-input']}
                            placeholder='Person' />
                        <button type='submit' className={styles['reserve__book-btn']}>
                            book now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
