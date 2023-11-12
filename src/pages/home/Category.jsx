import React from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import slide1 from "../../assets/home/slide1.jpg"
import slide2 from "../../assets/home/slide2.jpg"
import slide3 from "../../assets/home/slide3.jpg"
import slide4 from "../../assets/home/slide4.jpg"
import slide5 from "../../assets/home/slide5.jpg"
import PageTitle from '../shared/PageTitle';
const Category = () => {
    return (
        <>
            <div className='py-20'>
                <div className='pb-16'>
                    <PageTitle heading="---From 11:00am to 10:00pm---" subHeading="ORDER ONLINE"></PageTitle>
                </div>
                <Swiper
                    autoplay={true}
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    loop={true}

                    // pagination={{
                    //     clickable: true,
                    // }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" className='w-full' />
                        <h3 className="text-center relative -top-16 text-gray-400 uppercase text-xl md:text-3xl">Salad</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" className='w-full' />
                        <h3 className="text-center relative -top-16 text-gray-400 uppercase text-xl md:text-3xl">Soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" className='w-full' />
                        <h3 className="text-center relative -top-16 text-gray-400 uppercase text-xl md:text-3xl">pizzas</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" className='w-full' />
                        <h3 className="text-center relative -top-16 text-gray-400 uppercase text-xl md:text-3xl">desserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="" className='w-full' />
                        <h3 className="text-center relative -top-16 text-gray-400 uppercase text-xl md:text-3xl">Salad</h3>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default Category;