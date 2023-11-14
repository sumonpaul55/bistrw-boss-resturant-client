import React, { } from 'react';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import { toast } from 'react-toastify';

const FoodCard = ({ FoodCardData }) => {
    const { name, image, price, recipe, category, _id } = FoodCardData
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useAuth();
    const axiosSecure = useAxios()
    // console.log(FoodCardData)
    const handleAddToCart = () => {
        if (user && user?.email) {
            const cartItems = {
                menuItemId: _id,
                userEmail: user?.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItems)
                .then(res => {
                    res.data.insertedId && toast(`${name} Added succefully`, {
                        autoClose: 2000,
                        position: "bottom-center"
                    })
                }).catch(err => {
                    toast(`${err}`, {
                        autoClose: 2000,
                        position: "bottom-center"
                    })
                })

        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login or create an account to add to cart this items",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card rounded-none bg-[#F3F3F3] shadow-xl relative">
            <figure><img src={image} className='w-full' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-semibold text-xl text-center">{name}</h2>
                <p>{recipe}</p>
                <p>Category: {category}</p>
                <p className='bg-black px-4 md:text-xl py-1 text-white absolute top-5 right-5'>${price}</p>
                <div className="card-actions justify-center">
                    <button className="btn border-0 border-b-4 border-[#BB8506] text-[#BB8506] uppercase px-8" onClick={() => handleAddToCart(FoodCardData)}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;