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
import Dashboard from "../Layout/Dashboard";
import Cart from "../components/dashboard/cart/Cart";
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
                element: <Order></Order>
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
    {
        path: "dashboard",
        element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
        children: [
            {
                path: "/dashboard/cart",
                element: <Cart></Cart>
            }
        ]
    }
]);

export default routers