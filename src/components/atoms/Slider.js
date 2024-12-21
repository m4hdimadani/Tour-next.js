"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import styles from "../../app/styles/Slider.module.css";
import Image from "next/image";




function Slider() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const images = [ 
    "/R (1).jpg",
    "/OIP (8).jpg",
    "/3.jpg",
    "/4.jpg",
  ];

  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: `.${styles.prevButton}`,
          nextEl: `.${styles.nextButton}`,
        }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
        slidesPerView={1}
        loop={true}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              className={styles.image}
              width={500}
              height={500}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.controls}>
        <button className={styles.prevButton}>{"<-"}</button>
        <span className={styles.slideNumber}>
          {currentSlide} / {images.length}
        </span>
        <button className={styles.nextButton}>{"->"}</button>
      </div>
    </div>
  );
}

export default Slider;
