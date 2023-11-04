import React from 'react'
import styles from './MenuCard.module.css'

export default function MenuCard() {
  return (
    <div className={styles['menu-card']}>
      <div className={styles['menu-card__img-box']}>
        <img src='/images/menu-1.jpg' className={styles['menu-card__img']} alt='services' />
        <span className={styles['menu-card__price']}>5$</span>
      </div>
      <div className={styles['menu-card__content']}>
        <h3 className={styles['menu-card__title']}>
          chocolete coffee
        </h3>
        <div className='u__desc'>
          Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
          nonumy kasd sed 
        </div>
      </div>
    </div>
  )
}
