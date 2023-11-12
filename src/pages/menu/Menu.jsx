import React from 'react';
import HelmetProvider from '../shared/HelmetProvider';
import Cover from '../shared/Cover';
import bgImg from "../../assets/menu/banner3.jpg"
const Menu = () => {

    return (
        <main>
            <HelmetProvider pageTitle="Menu"></HelmetProvider>
            <section className=''>
                <Cover bgImg={bgImg} title="Our Menu" description="Would you like to try a dish?"></Cover>
            </section>
        </main>
    );
};

export default Menu;