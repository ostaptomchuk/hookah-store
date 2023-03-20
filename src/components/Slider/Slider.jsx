// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {
    Autoplay,Pagination
} from 'swiper/core';

SwiperCore.use([Autoplay,Pagination]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.scss";

// import required modules
import {Navigation} from "swiper";
import {Link} from "react-router-dom";

import elfBar5000 from "../../assets/slider/elfbar_5000_ua.png";
import molfar from "../../assets/slider/molfar.png";
import serbetli from "../../assets/slider/serbetli-slider.jpg";
import vaalSlider from "../../assets/slider/ua_vaaal.jpg";

const Slider = () => {
    return (
        <>
            <Swiper autoplay={{
                "delay": 5000,
                "disableOnInteraction": false
            }} navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <Link to="/products/pods?brand=Elf-bar&puffsCount=5000">
                        <img src={elfBar5000}/>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/products/tobaccos?brand=Serbetli&packSize=1">
                        <img src={molfar}/>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/products/tobaccos?brand=Serbetli&packSize=50">
                        <img src={serbetli}/>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/products/pods?brand=VAAL">
                        <img src={vaalSlider}/>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;
