import React from 'react';
import MenuItems from '../../shared/MenuItems';
import Cover from "../../shared/Cover"
import { Link } from 'react-router-dom';


const MenuCategory = ({ items, title, coverImg, coverDesc }) => {
    return (
        <div>
            {title && <Cover coverImg={coverImg} title={title} description={coverDesc}></Cover>}
            <div className="container mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-10'>
                    {
                        items.map((items, idx) => (
                            <MenuItems key={idx} menuItems={items}></MenuItems>
                        ))
                    }
                </div>
                <div className='text-center mb-14'>
                    <Link to={`/order/${title}`}><button className='border-0 border-b-4 border-black btn bg-transparent'>ORDER YOUR FAVOURITE FOOD</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MenuCategory;