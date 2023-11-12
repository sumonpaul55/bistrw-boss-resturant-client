import React from 'react';
import { Parallax } from 'react-parallax';
const Cover = ({ bgImg, title, description }) => {
    return (
        <Parallax blur={{ min: -15, max: 15 }}
            bgImage={`${bgImg}`}
            bgImageAlt="the Menu"
            strength={-50}>
            <div className="hero lg:h-[700px]">
                {/* <div className="hero-overlay bg-opacity-30"></div> */}
                <div className="hero-content pt-20 lg:pt-0 text-center text-neutral-content">
                    <div className="md:w-[800px] bg-black bg-opacity-60 p-2 md:p-20">
                        <h1 className="mb-5 text-2xl md:text-5xl font-bold">{title}</h1>
                        <p className="mb-5">{description}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;