import React from 'react'
import styles from './MenuDetail.module.css'
import MenuCard from '@/components/modules/MenuCard/MenuCard'

export default function Menu({menu}) {
    return (
        <div className={styles['menu']}>
            <h3 className='u__section-title'>
                menu & pricing
            </h3>
            <h1 className='u__section-text'>
                competitive pricing
            </h1>
            <div className={styles['menu__content']}>
                <div className={styles['menu__hot-coffee']}>
                    <h3 className={styles['menu__title']}>hot coffee</h3>
                    <div className={styles['menu__wrapper']}>
                        {menu?.filter(item => item.type === 'hot').map(menuItem => (
                            <MenuCard {...menuItem} />
                        ))}
                    </div>
                </div>
                <div className={styles['menu__cold-coffee']}>
                    <h3 className={styles['menu__title']}>cold coffee</h3>
                    <div className={styles['menu__wrapper']}>
                    {menu?.filter(item => item.type === 'cold').map(menuItem => (
                            <MenuCard key={crypto.randomUUID()} {...menuItem} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
