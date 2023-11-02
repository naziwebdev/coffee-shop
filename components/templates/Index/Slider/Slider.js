// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import styles from './Slider.module.css'

export default function Slider() {
  return (
    <Swiper loop={true}
      navigation={true}
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      className={styles['slider']}
    >
      <SwiperSlide className={styles['slider__bg-1']}>
        <div className={styles['slider__caption']}>
          <h4 className={styles['slider__text']}>
            we have been serving
          </h4>
          <h1 className={styles['slider__title']}>coffee</h1>
          <h4 className={styles['slider__year']}>* since 1950 *</h4>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles['slider__bg-2']}>
        <div className={styles['slider__caption']}>
          <h4 className={styles['slider__text']}>
            we have been serving
          </h4>
          <h1 className={styles['slider__title']}>coffee</h1>
          <h4 className={styles['slider__year']}>*since 1950*</h4>
        </div>
      </SwiperSlide>
    </Swiper>

  )
}
