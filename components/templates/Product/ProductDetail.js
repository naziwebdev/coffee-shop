import React from 'react'
import styles from './ProductDetail.module.css'
import { FaStar } from 'react-icons/fa'

export default function ProductDetail({ product }) {
    return (
        <div className={styles['product']}>
            <div className={styles['product__wrapper']}>
                <div className={styles['product__img-box']}>
                    <img src={product.img} className={styles['product__img']}
                        alt='img-product' />
                </div>
                <div className={styles['product__details']}>
                    <h3 className={styles['product__details-title']}>{product.title}</h3>
                    <div className={styles['product__details-star-box']}>

                        {new Array(Math.floor(product.score)).fill(0).map(item => (
                            <FaStar key={crypto.randomUUID()} className={styles['product__details-fillStar']} />
                        ))}
                        {new Array(5 - Math.floor(product.score)).fill(0).map(item => (
                            <FaStar key={crypto.randomUUID()} className={styles['product__details-star']} />
                        ))}

                    </div>
                    {product.off != 0 ?
                        <div className={styles['product__details-price-box']}>
                            <span className={styles['product__details-price']}>{product.price * product.off / 100}$</span>
                            <span className={styles['product__details-discount']}>{product.price}$</span>
                        </div>
                        :
                        <div className={styles['product__details-price-box']}>
                            <span className={styles['product__details-price']}>{product.price}$</span>
                        </div>
                    }
                    <p className={styles['product__details-desc']}>
                        {product.desc}
                    </p>
                    <button className={styles['product__details-btn']}>buy</button>
                </div>
            </div>
        </div>
    )
}
