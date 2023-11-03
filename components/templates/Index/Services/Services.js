import React from 'react'
import styles from './Services.module.css'
import ServicesCard from '@/components/modules/ServicesCard/ServicesCard'
import { FaTruck } from 'react-icons/fa'
import { FaCoffee } from 'react-icons/fa'
import { FaMedal } from 'react-icons/fa'
import { FaTable } from 'react-icons/fa'

export default function Services() {
  return (
    <div className={styles['services']}>
      <h3 className='u__section-title'>
        our services
      </h3>
      <h1 className='u__section-text'>
        fresh & organic beans
      </h1>
      <div className={styles['services__content']}>
        <ServicesCard title={'fastest door delivery'} href={'/images/service-1.jpg'}
          icon={<FaTruck />} />
        <ServicesCard title={'fresh coffee beans'} href={'/images/service-2.jpg'}
          icon={<FaCoffee />} />
        <ServicesCard title={'best quality coffee'} href={'/images/service-3.jpg'}
          icon={<FaMedal />} />
        <ServicesCard title={'online table booking'} href={'/images/service-4.jpg'}
          icon={<FaTable />} />
      </div>
    </div>
  )
}
