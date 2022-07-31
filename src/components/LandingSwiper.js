import React from "react";

// Style
import "../css/style.min.css";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

// Img
const sec03 = require('../img/sec03.jpg');

const slImage = [
    { img: require('../img/sec03_sl01.png') }, 
    { img: require('../img/sec03_sl02.png') }, 
    { img: require('../img/sec03_sl03.png') },
    { img: require('../img/sec03_sl04.png') },
];

export default () => {
    return (
        <div className="sec03">
            <img src={sec03}/>

            <Swiper
                className="sec03_Sl"
                spaceBetween={50}
                slidesPerView={1}
                navigation
                loop
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                { slImage.map( (img, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <img className="slImg" src={slImage[i].img} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    )
};