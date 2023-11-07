import React from 'react'
import styles from './Comments.module.css'
import ClientSayItem from '@/components/modules/ClientSayItem/ClientSayItem';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function Comments({ comments }) {
console.log(comments)
    return (

        <div className={styles['comments']}>
            <h3 className='u__section-title'>
                Testimonial
            </h3>
            <h1 className='u__section-text'>
                product comments
            </h1>
            <div className={styles['comments__wrapper']}>
                <Swiper
                    loop={true}
                    slidesPerView={2}
                    spaceBetween={180}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints= {{ 
                        200: {
                          slidesPerView: 1,
                        },     
                        650: {
                          slidesPerView: 2,
                          spaceBetween: 70,
                        },     
                    }}
                    modules={[Pagination, Autoplay]}
                    className={styles['comments__swiper']}
                >
                    {comments.length != 0 ?
                    comments?.map(item => (
                    <SwiperSlide className={styles['comments__item']} key={item.id}><ClientSayItem {...item} /></SwiperSlide>
                    ))
                    :
                    <div className={styles['comment-empety']}>کامنتی برای این محصول ثبت نشده است</div>
                    }
                </Swiper>
            </div>
        </div>
    )
}
