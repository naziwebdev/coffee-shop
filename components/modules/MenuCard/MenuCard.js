import React from 'react'
import styles from './MenuCard.module.css'

export default function MenuCard({title,price,img,desc}) {
  return (
    <div className={styles['menu-card']}>
      <div className={styles['menu-card__img-box']}>
        <img src={img} className={styles['menu-card__img']} alt='services' />
        <span className={styles['menu-card__price']}>{price}$</span>
      </div>
      <div className={styles['menu-card__content']}>
        <h3 className={styles['menu-card__title']}>
          {title}
        </h3>
        <div className='u__desc'>
         {desc}
        </div>
      </div>
    </div>
  )
}
