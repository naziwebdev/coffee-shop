import React from 'react'
import styles from './Offer.module.css'

export default function Offer() {
    return (
        <div className={styles['offer']}>
            <h1 className={styles['offer__title']}>
                50% off
            </h1>
            <div className={styles['offer__text-box']}>
                <h3 className={styles['offer__date']}>
                    sunday special offer
                </h3>
                <p className={styles['offer__date-details']}>
                    only for sunday from 1st jan to 30th jan 2023
                </p>
            </div>
            <form className={styles['offer__inform']}>
                <input type='email' placeholder='Your Email' className={styles['offer__inform-input']} />
                <button type='submit' className={styles['offer__inform-btn']}>
                    Sign Up
                </button>
            </form>
        </div>
    )
}
