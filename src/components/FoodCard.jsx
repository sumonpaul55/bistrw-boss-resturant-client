import React from 'react';

const FoodCard = ({ FoodCardData }) => {
    const { name, image, price, recipe, category } = FoodCardData
    // console.log(FoodCardData)
    return (
        <div className="card rounded-none bg-[#F3F3F3] shadow-xl relative">
            <figure><img src={image} className='w-full' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-semibold text-xl text-center">{name}</h2>
                <p>{recipe}</p>
                <p>Category: {category}</p>
                <p className='bg-black px-4 md:text-xl py-1 text-white absolute top-5 right-5'>${price}</p>
                <div className="card-actions justify-center">
                    <button className="btn border-0 border-b-4 border-[#BB8506] text-[#BB8506] uppercase px-8">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;