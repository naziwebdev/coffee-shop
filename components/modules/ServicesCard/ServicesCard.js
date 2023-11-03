import React from 'react'
import styles from './ServicesCard.module.css'

export default function ServicesCard({ title , href , icon }) {
  return (
    <div className={styles['service-card']}>
      <div className={styles['service-card__img-box']}>
        <img src={href} className={styles['service-card__img']} alt='services' />
      </div>
      <div className={styles['service-card__content']}>
        <div className={styles['service-card__title-box']}>
          <div className={styles['service-card__icon']}>
            {icon}
          </div>
          <h3 className={styles['service-card__title']}>
            {title}
          </h3>
        </div>
        <div className='u__desc'>
          Takimata sed vero vero no sit sed, justo clita duo no duo amet et,
          nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet
          no.Labor diam sed ipsum et eirmod
        </div>
      </div>
    </div>
  )
}
