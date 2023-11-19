import React, { } from 'react';
import PageTitle from '../shared/PageTitle';
import MenuItems from '../shared/MenuItems';
import useMenu from '../../hooks/useMenu';

const Ourmenu = () => {
    const [menu] = useMenu()

    const popularMenu = menu?.filter(items => items?.category?.toLowerCase() === "popular")
    return (
        <section>
            <div className="container mx-auto">
                <PageTitle heading="---Check it out---" subHeading="Popular items"></PageTitle>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20 mt-20'>
                    {popularMenu?.map((items, idx) => {
                        return <MenuItems key={idx} menuItems={items}></MenuItems>
                    })
                    }
                </div>
            </div>
        </section>
    );
};

export default Ourmenu;