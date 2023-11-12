import React from 'react';

const PageTitle = ({ heading, subHeading, className }) => {
    return (
        <div className={`text-center ${className}`}>
            <span className='text-[#D99904] text-lg md:text-xl'>{heading}</span>
            <div className='mt-10 mx-auto py-6 max-w-[400px] border-y-2'>
                <h4 className='text-xl md:text-3xl uppercase'>{subHeading}</h4>
            </div>
        </div>

    );
};

export default PageTitle;