import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'

export default function Header({ route }) {
  return (
    <div className={styles['header']}>
      <h1 className={styles['header__title']}>{route}</h1>
      <div className={styles['header__breadCrumb']}>
        <Link href={'/'} className={styles['header__breadCrumb-item']}>
          Home
        </Link>
        <span className={styles['header__breadCrumb-divider']}>/</span>
        <Link href={'/'} className={styles['header__breadCrumb-item']}>
          {route}
        </Link>
      </div>
    </div>
  )
}
