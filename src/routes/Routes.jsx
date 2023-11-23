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
import MangaItems from "../pages/dashboard/manageItems/MangaItems";
import UpdateItems from "../pages/dashboard/updateItems/UpdateItems";
import Payment from "../pages/dashboard/payment/Payment";
import PaymentHistory from "../pages/dashboard/paymentHistory/PaymentHistory";
import AdminHome from "../pages/dashboard/adminHome/AdminHome";
import UserHome from "../pages/dashboard/userHome/UserHome";
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
                path: "AdminHome",
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: "userHome",
                element: <UserHome></UserHome>
            },
            {
                path: "cart",
                element: <Cart></Cart>
            },
            {
                path: "payment-gateway",
                element: <Payment></Payment>
            },
            {
                path: "paymenthistory",
                element: <PaymentHistory></PaymentHistory>
            },
            // admin only routes
            {
                path: 'add-items',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: "users",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: "manage-items",
                element: <AdminRoute> <MangaItems></MangaItems></AdminRoute>
            },
            {
                path: "updateItems/:id",
                // https://bistrow-boss-server-kqtazrfgq-sumonpaul55s-projects.vercel.app/
                loader: ({ params }) => fetch(`https://bistrow-boss-server-kqtazrfgq-sumonpaul55s-projects.vercel.app/updateItems/${params.id}`),
                element: <AdminRoute><UpdateItems></UpdateItems></AdminRoute>
            }
        ]
    }
]);

export default routers