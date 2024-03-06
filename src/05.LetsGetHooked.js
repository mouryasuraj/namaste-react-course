
import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestuaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import UserContext from "./Utils/UserContext";
// import Grocery from "./components/Grocery";    //If you want to use lazy loading then we cannot import components like this

// Provider to connect Redux
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";

// Here how we can import our component using lazy loading
const Grocery = lazy(() => (
    import("./components/Grocery")  //This import is distinct with normal import. It is a function which is given by react
))

const About = lazy(() => (
    import('./components/About')
))



// Top level Component
const AppLayout = () => {

    const [userName, setUserName] = useState('')

    // authentication
    useEffect(() => {
        const data = {
            name: "Suraj Mourya"
        }
        setUserName(data.name)
    }, [])

    return (
        // This is the provider for redux
        <Provider store={appStore}>
            {/*here the username will be "Default User"*/}
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>  {/*Note: We can provide Provider to an specific component also */}
                {/* Here the userName will be "Suraj Mourya" */}
                <div className="app">
                    {/* <UserContext.Provider value={{ loggedInUser: "Vipin" }}> */}
                    {/* Here the userName will be Vipin" */}
                    <Header />
                    {/* </UserContext.Provider> */}
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <Suspense fallback={<h1>Loadin....</h1>} ><About /></Suspense>
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Loadin....</h1>} ><Grocery /></Suspense>
            },
            {
                path:'/cart',
                element:<Cart />
            },
            {
                path: '/restaurant/:resId',
                element: <RestuaurantMenu />
            }
        ],
        errorElement: <Error />
    }


])


const rootDOM = ReactDOM.createRoot(document.querySelector('#root'));
rootDOM.render(<RouterProvider router={appRouter} />)