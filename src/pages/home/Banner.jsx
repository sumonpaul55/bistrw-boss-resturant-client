import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/home/01.jpg"
import img2 from "../../assets/home/02.jpg"
import img3 from "../../assets/home/03.png"
import img4 from "../../assets/home/04.jpg"
import img5 from "../../assets/home/05.png"
import img6 from "../../assets/home/06.png"
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className='banner'>
            <Carousel className='' axis='horizontal' autoPlay={true} emulateTouch={true} interval={3000} infiniteLoop={true} showArrows={true} showStatus={false}>
                <div>
                    <img src={img1} className='' />
                </div>
                <div>
                    <img src={img2} className='' />
                </div>
                <div>
                    <img src={img3} className='' />
                </div>
                <div>
                    <img src={img4} className='' />
                </div>
                <div>
                    <img src={img5} className='' />
                </div>
                <div>
                    <img src={img6} className='' />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;