import React from 'react'
import styles from './ServicesCard.module.css'
import { useState, useEffect } from 'react'


export default function ServicesCard({ title , img , icon ,desc }) {

  const [Icon, setIcon] = useState();

  useEffect(() => {
    const loadIcon = async () => {
      const Icon = await import("react-icons/fa").then(m => m[icon]);
      setIcon(() => Icon);
    };

    loadIcon();
  }, []);

  return (
    <div className={styles['service-card']}>
      <div className={styles['service-card__img-box']}>
        <img src={img} className={styles['service-card__img']} alt='services' />
      </div>
      <div className={styles['service-card__content']}>
        <div className={styles['service-card__title-box']}>
          <div className={styles['service-card__icon']}>
            {Icon && <Icon/>}
          </div>
          <h3 className={styles['service-card__title']}>
            {title}
          </h3>
        </div>
        <div className='u__desc'>
          {desc}
        </div>
      </div>
    </div>
  )
}
