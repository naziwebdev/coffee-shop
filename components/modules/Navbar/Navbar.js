import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { IoMdArrowDropdown } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Navbar() {
  return (
    <div className={styles['navbar']}>
      <div className={styles['navbar__logo-box']}>
        <h1 className={styles['navbar__logo']}>NEXT-COFFEE</h1>
      </div>
      <div className={styles['navbar__nav-box']}>
        <GiHamburgerMenu className={styles['navbar__hamberger']} />
        <ul className={styles['navbar__nav']}>
          <Link href={'./'} className={`${styles['navbar__nav-link']} ${styles['navbar__active']}`}><li>Home</li></Link>
          <Link href={'./'} className={styles['navbar__nav-link']}><li>About</li></Link>
          <Link href={'./'} className={styles['navbar__nav-link']}><li>Service</li></Link>
          <Link href={'./'} className={styles['navbar__nav-link']}><li>Menue</li></Link>
          <div className={styles['navbar__dropdown']}>
            <Link href={'#'} className={`${styles['navbar__nav-link']} ${styles['navbar__nav-align']}`}>Pages<IoMdArrowDropdown /></Link>
            <div className={styles['navbar__dropdown-menu']}>
              <Link href={'#'} className={styles['navbar__dropdown-item']}>Resarvation</Link>
              <Link href={'#'} className={styles['navbar__dropdown-item']}>Testimonial</Link>
            </div>
          </div>
          <Link href={'#'} className={styles['navbar__nav-link']}>Contact</Link>
        </ul>
      </div>

    </div>
  )
}
