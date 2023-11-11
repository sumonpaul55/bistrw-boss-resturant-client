import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../Layout/MainLayout";
import Menu from "../pages/shared/footer/Menu";
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
                element: <Menu />
            }
        ]
    },
]);

export default routers