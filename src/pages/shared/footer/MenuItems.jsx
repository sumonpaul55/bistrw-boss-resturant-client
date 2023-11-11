import React from 'react';

const MenuItems = ({ menuItems }) => {
    const { name, image, price } = menuItems
    console.log(menuItems)
    return (
        <div className='flex items-start gap-4'>
            <img src={image} alt="" className='w-28 h-28 rounded-b-full rounded-r-full' />
            <div className='space-y-3'>
                <h4 className='text-[#151515] text-lg md:text-xl'>{name} ------------------</h4>
                <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>

            </div>
            <p className='text-[#BB8506] font-semibold whitespace-nowrap'>$ {price}</p>
        </div>
    );
};

export default MenuItems;