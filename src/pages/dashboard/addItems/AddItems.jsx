import React from 'react';
import PageTitle from '../../shared/PageTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxios from '../../../hooks/useAxios';
import { toast } from 'react-toastify';

const image_apikey = import.meta.env.VITE_IMAGE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_apikey}`
const AddItems = () => {
    const axiosSecure = useAxios()
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        if (res.data.success) {
            // send data the menu items with the imgae url
            const menuItems = {
                name: data.name,
                price: parseFloat(data.price),
                category: data.category,
                recipe: data.recipe,
                image: res.data?.data?.display_url
            }
            const menuRes = await axiosSecure.post("/menu", menuItems)
            if (menuRes.data.insertedId) {
                toast("Items added Successfull");
                reset()
            }
        }
    }

    return (
        <div className='p-5 bg-slate-300'>
            <PageTitle heading="---What's new?---" subHeading="ADD AN ITEM"></PageTitle>
            <form onSubmit={handleSubmit(onSubmit)} className='m-5 md:px-20'>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Recipe name*</span>
                    </label>
                    <input type="text" defaultValue="" {...register("recipe", { required: true })} placeholder="Type here" className="input input-bordered w-full p-2" />
                </div>
                <div className='mt-5 flex flex-col md:flex-row gap-4 items-center'>
                    <div className="form-control w-full">
                        <label className="label">
                            Category*
                        </label>
                        <select className="select select-bordered" defaultValue {...register("category", { required: true })}>
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
                        <input type="number" defaultValue="" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full p-2" />
                    </div>
                </div>
                <div className="form-control w-full mt-4">
                    <label className="label">
                        <span className="label-text">Recipe Details*</span>
                    </label>
                    <textarea defaultValue="" {...register("details", { required: true })} rows="6" className="input-bordered w-full rounded-lg p-3"></textarea>
                </div>
                <div className="form-control w-full mt-4">
                    <label className="label">
                        <span className="label-text">Recipe Details*</span>
                    </label>
                    <input type="file" defaultValue="" {...register("image", { required: true })} placeholder='Choose File' className='p-2 bg-white' />
                </div>
                <input type="submit" value="add items" className="capitalize font-semibold inline-block mt-4 cursor-pointer" />
                <FaUtensils className='inline ml-2' />
            </form >
        </div >
    );
};

export default AddItems;