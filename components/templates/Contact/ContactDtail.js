import styles from './ContactDetail.module.css'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useState } from 'react'

export default function ContactDtail() {

    const [usename, setUsername] = useState('')

    const [email, setEmail] = useState('')

    const [subject, setSubject] = useState('')

    const [body, setBody] = useState('')



    const postContactHandler = async (event) => {
        event.preventDefault()

        const newMessage = {
            usename,
            email,
            subject,
            body
        }

        const res = await fetch('http://localhost:4000/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            }, body: JSON.stringify(newMessage)
        })

        const result = await res.json()

        console.log(result)
        setBody('')
        setEmail('')
        setSubject('')
        setUsername('')

    }

    return (
        <div className={styles['contact']}>
            <h3 className='u__section-title'>
                contact us
            </h3>
            <h1 className='u__section-text'>
                feel free to contact
            </h1>
            <div className={styles['contact__wrapper']}>
                <div className={styles['contact__info']}>
                    <div className={styles['contact__info-item']}>
                        <FaLocationDot className={styles['contact__info-icon']} />
                        <h4 className={styles['contact__info-title']}>Address</h4>
                        <p className={styles['contact__info-text']}>123 Street, New York, USA</p>
                    </div>
                    <div className={styles['contact__info-item']}>
                        <FaPhoneAlt className={styles['contact__info-icon']} />
                        <h4 className={styles['contact__info-title']}>Phone</h4>
                        <p className={styles['contact__info-text']}>+021 345 6789</p>
                    </div>
                    <div className={styles['contact__info-item']}>
                        <MdEmail className={styles['contact__info-icon']} />
                        <h4 className={styles['contact__info-title']}>Email</h4>
                        <p className={styles['contact__info-text']}>info@example.com</p>
                    </div>
                </div>
                <div className={styles['contact__tools']}>
                    <div className={styles['contact__map-box']}>
                        <iframe
                            className={styles['contact__map']}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                            frameBorder="0"
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </div>
                    <form className={styles['contact__form']}>
                        <input type='text' className={styles['contact__form-input']}
                            placeholder='Name' value={usename}
                            onChange={(event) => setUsername(event.target.value)} />
                        <input type='email' className={styles['contact__form-input']}
                            placeholder='Emeil' value={email}
                            onChange={(event) => setEmail(event.target.value)} />
                        <input type='text' className={styles['contact__form-input']}
                            placeholder='Subject' value={subject}
                            onChange={(event) => setSubject(event.target.value)} />
                        <textarea className={styles['contact__form-text']} value={body}
                            placeholder='Message' onChange={(event) => setBody(event.target.value)}></textarea>
                        <button type='submit' onClick={postContactHandler} className={styles['contact__form-btn']}>
                            send message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
