import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout"
import Menu from "../pages/menu/Menu"
import Home from "../pages/home/Home"
import Order from "../pages/order/Order";
import Login from "../pages/login/Login";
import Signup from "../pages/signUp/Signup";
import PrivetRoute from "./PrivetRoute";
const routers = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: "/order/:category",
                element: <PrivetRoute><Order></Order></PrivetRoute>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signUp",
                element: <Signup></Signup>
            }


        ]
    },
]);

export default routers