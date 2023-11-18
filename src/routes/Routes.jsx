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
import AllUsers from "../Layout/allUsers/AllUsers";
import AddItems from "../pages/dashboard/addItems/AddItems";
import AdminRoute from "./AdminRoute";
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
            // normal users route
            {
                path: "cart",
                element: <Cart></Cart>
            },
            // admin only routes
            {
                path: 'add-items',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: "users",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
]);

export default routers