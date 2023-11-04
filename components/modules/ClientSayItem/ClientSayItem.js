import React from 'react'
import styles from './ClientSayItem.module.css'

export default function ClientSayItem() {
  return (
    <div className={styles['comment']}>
      <div className={styles['comment__head']}>
        <img src='/images/testimonial-1.jpg' className={styles['comment__img']} alt='profile' />
        <div className={styles['comment__user']}>
          <h4 className={styles['comment__user-name']}>client name</h4>
          <p className={styles['comment__user-profession']}>Profession</p>
        </div>
      </div>
      <div className={styles['comment__body']}>
        <div className='u__desc'>
          Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
          nonumy kasd sed dolor eos diam lorem eirmod.
        </div>
      </div>
    </div>
  )
}
