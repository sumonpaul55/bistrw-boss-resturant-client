/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PageTitle from '../shared/PageTitle';
import { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { BiSolidQuoteRight } from "react-icons/bi"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'
const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    const [rating, setRating] = useState(4) // Initial value

    useEffect(() => {
        // https://bistrow-boss-server-kqtazrfgq-sumonpaul55s-projects.vercel.app/
        fetch("https://bistrow-boss-server-kqtazrfgq-sumonpaul55s-projects.vercel.app/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    // console.log(reviews)
    return (
        <section className='py-20'>
            <div className="container mx-auto">
                <PageTitle heading="---What Our Clients Say---" subHeading="TESTIMONIALS"></PageTitle>
                <div className='text-center mt-20'>
                    <Swiper navigation={true} modules={[Navigation]}>
                        {
                            reviews.map((items, idx) => <SwiperSlide key={idx} >
                                <div className='flex justify-center flex-col items-center gap-3 px-10 md:px-20 lg:max-w-[70%] mx-auto'>
                                    <Rating style={{ maxWidth: 150 }} value={rating} />
                                    <span className='text-5xl block mt-5'><BiSolidQuoteRight /></span>
                                    <div className=''>
                                        <p>{items.details}</p>
                                        <h4 className='text-[#CD9003] text-xl md:text-2xl lg:text-3xl font-medium'>{items.name}</h4>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>

            </div>
        </section>
    );
};

export default Testimonial;