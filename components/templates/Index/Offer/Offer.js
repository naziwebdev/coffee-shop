import React from 'react'
import styles from './Offer.module.css'
import { useState } from 'react'

export default function Offer() {

    const [email, setEmail] = useState('')


    const addUserEmailHandler = async (event) => {
        event.preventDefault()

        const res = await fetch('http://localhost:4000/newsletters', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            }, body: JSON.stringify({ email })
        })

        const result = await res.json()

        console.log(result)
        setEmail('')

    }

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
                <input type='email' value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Your Email' className={styles['offer__inform-input']} />
                <button type='submit' onClick={addUserEmailHandler} className={styles['offer__inform-btn']}>
                   JOIN
                </button>
            </form>
        </div>
    )
}
