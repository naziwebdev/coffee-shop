import React from 'react'
import styles from './ClientSayItem.module.css'

export default function ClientSayItem({username,body,profile}) {
  return (
    <div className={styles['comment']}>
      <div className={styles['comment__head']}>
        <img src={profile} className={styles['comment__img']} alt='profile' />
        <div className={styles['comment__user']}>
          <h4 className={styles['comment__user-name']}>{username}</h4>
          <p className={styles['comment__user-profession']}>Profession</p>
        </div>
      </div>
      <div className={styles['comment__body']}>
        <div className='u__desc'>
          {body}
        </div>
      </div>
    </div>
  )
}
