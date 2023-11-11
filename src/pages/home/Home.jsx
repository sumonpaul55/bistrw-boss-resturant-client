import React from "react";
import Banner from "./Banner";
import "./home.css"
import Category from "./Category";
import Ourmenu from "./Ourmenu";
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
                <Ourmenu></Ourmenu>
            </dir>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;