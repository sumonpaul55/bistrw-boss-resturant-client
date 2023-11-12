import React from "react";
import Banner from "./Banner";
import "./home.css"
import Category from "./Category";
import PopularMenu from "./PopularMenu";
import Featured from "./Featured";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <div className="container mx-auto">
                <Category></Category>
            </div>
            <dir className="mb-5">
                <PopularMenu></PopularMenu>
            </dir>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;