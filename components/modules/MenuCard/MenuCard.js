import React from 'react'
import styles from './MenuCard.module.css'
import Link from 'next/link'

export default function MenuCard({ title, price, img, desc, id }) {
  return (
    <Link href={`/product/${id}`} className='link-item'>
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
    </Link>
  )
}
