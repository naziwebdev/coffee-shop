import React from 'react'
import styles from './SearchResult.module.css'
import MenuCard from '@/components/modules/MenuCard/MenuCard'
import { useState } from 'react'

export default function Menu({ searchResult }) {

    const hotItems = searchResult?.filter(item => item.type === 'hot')
    const coldItems = searchResult?.filter(item => item.type === 'cold')


    return (
        <div className={styles['menu']}>
            <div className={styles['menu__content']}>
                <div className={styles['menu__hot-coffee']}>
                    <h3 className={styles['menu__title']}>hot coffee</h3>
                    <div className={styles['menu__wrapper']}>
                        {
                            hotItems.length != 0 ? hotItems.map(menuItem => (
                                <MenuCard key={crypto.randomUUID()} {...menuItem} />
                            ))
                                :
                                <div className={styles['menu__empety-item']}>
                                    در این دسته بندی موردی یافت نشد
                                </div>

                        }
                    </div>
                </div>
                <div className={styles['menu__cold-coffee']}>
                    <h3 className={styles['menu__title']}>cold coffee</h3>
                    <div className={styles['menu__wrapper']}>
                        {
                            coldItems.length != 0 ? coldItems.map(menuItem => (
                                <MenuCard key={crypto.randomUUID()} {...menuItem} />
                            ))
                                :
                                <div className={styles['menu__empety-item']}>
                                    در این دسته بندی موردی یافت نشد
                                </div>

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
