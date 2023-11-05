import React from 'react'
import styles from './Footer.module.css'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className={styles['footer']}>
      <div className={styles['footer__wrapper']}>
        <div className={styles['footer__content']}>
          <div className={styles['footer__contact']}>
            <h3 className={styles['footer__title']}>
              get in touch
            </h3>
            <p className={styles['footer__contact-item']}>
              <FaLocationDot className={styles['footer__contact-icon']} />
              123 Street, New York, USA
            </p>
            <p className={styles['footer__contact-item']}>
              <FaPhoneAlt className={styles['footer__contact-icon']} />
              +021 345 67890
            </p>
            <p className={styles['footer__contact-item']}>
              <MdEmail className={styles['footer__contact-icon']} />
              info@example.com
            </p>
          </div>
          <div className={styles['footer__social']}>
            <h3 className={styles['footer__title']}>
              follow us
            </h3>
            <p className={styles['footer__text']}>
              Amet sit amet amet no.Labor diam sed ipsum et eirmod
            </p>
            <div className={styles['footer__social-box']}>
              <div className={styles['footer__social-item']}>
                <FaTwitter />
              </div>
              <div className={styles['footer__social-item']}>
                <FaFacebookF />
              </div>
              <div className={styles['footer__social-item']}>
                <FaLinkedinIn />
              </div>
              <div className={styles['footer__social-item']}>
                <FaInstagram />
              </div>
            </div>
          </div>
          <div className={styles['footer__info']}>
            <h3 className={styles['footer__title']}>
              open hours
            </h3>
            <div className={styles['footer__info-item']}>
              <p className={styles['footer__info-text']}>
                monday - friday
              </p>
              <p className={styles['footer__info-text']}>
                8:00 am - 8:00 pm
              </p>
            </div>
            <div className={styles['footer__info-item']}>
              <p className={styles['footer__info-text']}>
                saturday - sunday
              </p>
              <p className={styles['footer__info-text']}>
                2:00 am - 8:00 pm
              </p>
            </div>
          </div>
          <div className={styles['footer__newsletter']}>
          <h3 className={styles['footer__title']}>
              newsletter
            </h3>
            <p className={styles['footer__text']}>
              Amet sit amet amet no.Labor diam sed ipsum et eirmod
            </p>
            <form className={styles['footer__inform']}>
                <input type='email' placeholder='Your Email' className={styles['footer__inform-input']} />
                <button type='submit' className={styles['footer__inform-btn']}>
                    join
                </button>
            </form>
          </div>

        </div>
        <div className={styles['footer__copyRight']}>
          <p className={styles['footer__copyRight-text']}>
             copyright 	&#169; <span className={styles['footer__owner']}>domain</span>
             .all rights reserved .
             </p> 
          <p className={styles['footer__copyRight-text']}>
             designed by <span className={styles['footer__owner']}>HTML dodex</span>
             </p> 
        </div>
      </div>
    </div>
  )
}
