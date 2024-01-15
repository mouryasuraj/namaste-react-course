
import React from "react";
import ReactDOM from "react-dom/client";
import  Header  from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";



// Top level Component
const AppLayout = () => {


    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout />,
        children:[
            {
                path:'/',
                element:<Body />,
            },
            {
                path:'/about',
                element:<About />
            },
            {
                path:'/contact',
                element:<Contact />
            }
        ],
        errorElement:<Error />
    }
    

])


const rootDOM = ReactDOM.createRoot(document.querySelector('#root'));
rootDOM.render(<RouterProvider router={appRouter} />)