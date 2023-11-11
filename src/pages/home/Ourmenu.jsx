import React, { useEffect, useState } from 'react';
import PageTitle from '../../shared/PageTitle';
import MenuItems from '../shared/footer/MenuItems';

const Ourmenu = () => {
    const [populardata, setpopularData] = useState([])
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(items => items.category.toLowerCase() === "popular")
                setpopularData(popularItems)
            })
    }, [])
    return (
        <section>
            <div className="container mx-auto">
                <PageTitle heading="---Check it out---" subHeading="Popular items"></PageTitle>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20 mt-20'>
                    {populardata.map((items, idx) => {
                        return <MenuItems key={idx} menuItems={items}></MenuItems>
                    })
                    }
                </div>
            </div>
        </section>
    );
};

export default Ourmenu;