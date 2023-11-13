import React, { useState } from 'react';
import orderCover from "../../assets/shop/banner2.jpg"
import Cover from '../shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import FoodCard from '../../components/FoodCard';
import "./order.css"
import { Link, useParams } from 'react-router-dom';
const Order = () => {
    const [menu, loading] = useMenu()
    const categories = new Set(menu?.map(items => items.category))

    let commonCategory = []
    for (let cate of categories) {
        if (cate !== "popular" && cate !== "offered") {
            commonCategory.push(cate)
        }
    }
    const page = useParams().category;
    // console.log(page)
    const index = commonCategory.indexOf(page) + 1
    const [tab, setTab] = useState(index)
    // console.log(index)
    if (loading) {
        return <h3 className='mt-32 text-center text-3xl py-10 font-bold'>Loading...</h3>
    }
    return (
        <main className=''>
            <div className='container mx-auto'>
                <Cover coverImg={orderCover} title="Order Foor" description="Would you like to try a dish?"></Cover>
            </div>
            <section className='py-16'>
                <div className='container mx-auto'>
                    <Tabs defaultIndex={tab} onSelect={(index) => setTab(index)}>
                        <TabList className="text-center pb-8">
                            {
                                commonCategory?.map((items, idx) => (
                                    <Tab key={idx}>
                                        <Link to={`/order/${items}`}>
                                            <div className='text-xl uppercase text-[#BB8506]'>{items}</div>
                                        </Link>
                                    </Tab>
                                ))
                            }
                        </TabList>
                        {
                            commonCategory.map((category, idx) => (
                                <TabPanel key={idx}>
                                    <div className='grid grid-cols-1 gap-12 md:grid-cols-3'>
                                        {
                                            menu.filter(items => items?.category?.toLowerCase() === category).map((items, idx) => (
                                                <FoodCard key={idx} FoodCardData={items}></FoodCard>
                                            ))
                                        }
                                    </div>
                                </TabPanel>
                            ))
                        }
                    </Tabs>
                </div>
            </section>
        </main>
    );
};

export default Order;