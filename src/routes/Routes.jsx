import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout"
import Menu from "../pages/menu/Menu"
import Home from "../pages/home/Home"
import Order from "../pages/order/Order";
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
                path: "/order",
                element: <Order></Order>
            }
        ]
    },
]);

export default routers