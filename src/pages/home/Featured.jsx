import React from 'react';
import PageTitle from '../shared/footer/PageTitle';
import features from "../../assets/home/featured.jpg"
const Featured = () => {
    return (
        <section className='featured bg-fixed bg-black'>
            <div className='bg-black py-20 bg-opacity-20 h-full'>
                <div className='container mx-auto'>
                    <PageTitle className="text-white" heading="---Check it out---" subHeading="FROM OUR MENU"></PageTitle>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 items-center py-10'>
                        <div className='lg: pl-8'>
                            <img src={features} alt="" />
                        </div>
                        <div className='text-white space-y-2'>
                            <time>March 20, 2023</time>
                            <h4 className="uppercase text-lg">WHERE CAN I GET SOME?</h4>
                            <p className='text-md leading-relaxed'>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <button className='btn text-white border-transparent border-b-white  hover:text-black mt-6 bg-transparent'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;