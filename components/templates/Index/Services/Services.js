import React from 'react'
import styles from './Services.module.css'
import ServicesCard from '@/components/modules/ServicesCard/ServicesCard'

export default function Services({services}) {
  return (
    <div className={styles['services']}>
      <h3 className='u__section-title'>
        our services
      </h3>
      <h1 className='u__section-text'>
        fresh & organic beans
      </h1>
      <div className={styles['services__content']}>
        {services.map(service => (
          <ServicesCard key={crypto.randomUUID()} {...service} />
        ))}
      </div>
    </div>
  )
}
