import React from 'react'
import styles from './Testimonial.module.css'
import ClientSayItem from '@/components/modules/ClientSayItem/ClientSayItem'

export default function Testimonial() {
  return (
    <div className={styles['testimonial']}>
    <h3 className='u__section-title'>
      Testimonial
    </h3>
    <h1 className='u__section-text'>
      our clients say
    </h1>
     <div className={styles['testimonial__content']}>
          <ClientSayItem/>
          <ClientSayItem/>
          <ClientSayItem/>
          <ClientSayItem/>
     </div>
    </div>
  )
}
