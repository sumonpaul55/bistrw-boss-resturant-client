import React from 'react';
import HelmetProvider from '../shared/HelmetProvider';
import Cover from '../shared/Cover';
import bgImg from "../../assets/menu/banner3.jpg"
import useMenu from '../../hooks/useMenu';
// import MenuItems from '../shared/MenuItems';
import MenuCategory from './menuCategory/MenuCategory';
import PageTitle from '../shared/PageTitle';
import fizzaimg from '../../assets/menu/pizza-bg.jpg'
import dessert from "../../assets/menu/dessert-bg.jpeg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(items => items?.category?.toLowerCase() === "offered")
    const soup = menu.filter(items => items?.category?.toLowerCase() === "soup")
    const desserts = menu.filter(items => items?.category?.toLowerCase() === "dessert")
    const salad = menu.filter(items => items?.category?.toLowerCase() === "salad")
    const fizza = menu.filter(items => items?.category?.toLowerCase() === "pizza")
    // console.log(menu)
    return (
        <main>
            <HelmetProvider pageTitle="Menu"></HelmetProvider>
            <section className=''>
                <Cover coverImg={bgImg} title="Our Menu" description="Would you like to try a dish?"></Cover>
                <div className='todaysOffer'>
                    <PageTitle heading="---Don't miss---" subHeading="TODAY'S OFFER" className="py-16"></PageTitle>
                    <MenuCategory items={offered}></MenuCategory>
                    {/* desser menu */}
                    <MenuCategory items={desserts} title="dessert" coverImg={dessert} coverDesc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
                    <MenuCategory items={fizza} title="pizza" coverImg={fizzaimg} coverDesc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
                    <MenuCategory items={salad} title="salad" coverImg={saladImg} coverDesc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
                    <MenuCategory items={soup} title="soup" coverImg={soupImg} coverDesc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>
                </div>
            </section>
        </main>
    );
};

export default Menu;