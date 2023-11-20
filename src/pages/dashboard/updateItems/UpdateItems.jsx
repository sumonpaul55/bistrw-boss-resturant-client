import React from 'react';
import PageTitle from '../../shared/PageTitle';
import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import useAxios from '../../../hooks/useAxios';
import Swal from 'sweetalert2';


const image_apikey = import.meta.env.VITE_IMAGE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_apikey}`
const UpdateItems = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxios()
    const { register, handleSubmit, reset } = useForm()
    const items = useLoaderData();
    const { name, category, recipe, price, _id } = items

    const onSubmit = async (data) => {
        console.log("clicked")
        let menuItems = {
            name: data.name,
            price: data.price,
            category: data.category,
            recipe: data.recipe,
        }
        if (data.image.length > 0) {
            // image upload to imgbb and then get an url
            const imageFile = { image: data.image[0] }
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
            if (res.data.success) {
                menuItems.image = res.data?.data?.display_url
                // send data the menu items with the imgae url
            }
        }
        const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItems)
        if (menuRes.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${name} is updated to the menu`,
                showConfirmButton: false,
                timer: 2000
            })
            reset()
        }
    }



    return (
        <div>
            <PageTitle heading="UPDATE ITEM" subHeading="Refresh Info"></PageTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='m-5 md:px-20'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input type="text" defaultValue={name} {...register("recipe", { required: true })} placeholder="Type here" className="input input-bordered w-full p-2" />
                    </div>
                    <div className='mt-5 flex flex-col md:flex-row gap-4 items-center'>
                        <div className="form-control w-full">
                            <label className="label">
                                Category*
                            </label>
                            <select className="select select-bordered" defaultValue={category} {...register("category", { required: true })}>
                                <option value="">Select a Category</option>
                                <option value="salad">salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soupe</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input type="number" defaultValue={price} {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full p-2" />
                        </div>
                    </div>
                    <div className="form-control w-full mt-4">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <textarea defaultValue={recipe} {...register("recipe", { required: true })} rows="6" className="input-bordered w-full rounded-lg p-3 border"></textarea>
                    </div>
                    <div className="form-control w-full mt-4">
                        <label className="label">
                            <span className="label-text">Recipe Details*</span>
                        </label>
                        <input type="file" {...register("image")} placeholder='Choose File' className='p-2 bg-white' />
                    </div>
                    <input type="submit" value="Update Items" className="capitalize font-semibold inline-block mt-4 cursor-pointer hover:text-secondary" />
                    <FaUtensils className='inline ml-2' />
                </form >
            </div>
        </div>
    );
};

export default UpdateItems;