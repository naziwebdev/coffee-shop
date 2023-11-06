import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { IoMdArrowDropdown } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'

export default function Navbar() {

  const [toggleSidebar, setTiggleSidebar] = useState(false)

  return (
    <div className={styles['navbar']}>
      <div className={styles['navbar__logo-box']}>
        <h1 className={styles['navbar__logo']}>NEXT-COFFEE</h1>
      </div>

      {toggleSidebar &&
        <div className={styles['sidebar']}>
          <span className={styles['sidebar__close']}
           onClick={() => setTiggleSidebar(false)}>&#9747;</span>
          <ul className={styles['sidebar__nav']}>
            <Link href={'/'} className={`${styles['sidebarr__nav-link']} ${styles['sidebar__active']}`}><li>Home</li></Link>
            <Link href={'/about'} className={styles['sidebar__nav-link']}><li>About</li></Link>
            <Link href={'/service'} className={styles['sidebar__nav-link']}><li>Service</li></Link>
            <Link href={'/menu'} className={styles['sidebar__nav-link']}><li>Menu</li></Link>
            <Link href={'/reservation'} className={styles['sidebar__nav-link']}><li>Resarvation</li></Link>
            <Link href={'/testimonial'} className={styles['sidebar__nav-link']}><li>Testimonial</li></Link>
            <Link href={'/contact'} className={styles['sidebar__nav-link']}><li>Contact</li></Link>
          </ul>
        </div>
      }
      <div className={styles['navbar__nav-box']}>
        <GiHamburgerMenu className={styles['navbar__hamberger']}
          onClick={() => setTiggleSidebar(prev => !prev)} />

        <ul className={styles['navbar__nav']}>
          <Link href={'/'} className={`${styles['navbar__nav-link']} ${styles['navbar__active']}`}><li>Home</li></Link>
          <Link href={'/about'} className={styles['navbar__nav-link']}><li>About</li></Link>
          <Link href={'/service'} className={styles['navbar__nav-link']}><li>Service</li></Link>
          <Link href={'/menu'} className={styles['navbar__nav-link']}><li>Menu</li></Link>
          <div className={styles['navbar__dropdown']}>
            <Link href={'#'} className={`${styles['navbar__nav-link']} ${styles['navbar__nav-align']}`}>Pages<IoMdArrowDropdown /></Link>
            <div className={styles['navbar__dropdown-menu']}>
              <Link href={'/reservation'} className={styles['navbar__dropdown-item']}>Resarvation</Link>
              <Link href={'/testimonial'} className={styles['navbar__dropdown-item']}>Testimonial</Link>
            </div>
          </div>
          <Link href={'/contact'} className={styles['navbar__nav-link']}>Contact</Link>
        </ul>
      </div>

    </div>
  )
}
