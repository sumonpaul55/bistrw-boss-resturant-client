import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../Layout/MainLayout";
const routers = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
]);

export default routers