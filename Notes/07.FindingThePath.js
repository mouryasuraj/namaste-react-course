/*

// Deep dive into useEffect hook
1.Only first argument is mandatory in useEFect hook which is a callback function. Second argument is not mandatory which is an array of dependencies.
2.If there is no dependency array then every time the component render, useEffect will be called.
3.If dependency array is empty----> useEffect will call on initial render(only once).
4.If we put something in dependency array ---> Then it will change if any of the dependency changes.


// Deep dive into useState hook
1.Always create local state variable inside function component.
2.Always put hooks at the starting point of the component.
3.Don't put hooks inside if, function, loops. It will create inconsistency in your code.


------------------React ROuter DOM-----------------------
1.It is a js library used to create routes.
2.Whenever we have to create routes we have to do routing configuration on the  entry point of the program like index.js or App.js. (Configuration means that what happen on a specific route).
4.CreateBrowserRouter() takes the list of paths of object in the array.
3.Steps to configure the router:
    a.First, import createBrowserRouter from react-router-dom.
    b.Then create a variable and assigned createBrowserRouter([{},{}]). It takes list of paths.
    c.After creating paths, It need to pass to the RouterProvider Component to render the component according to the paths. To do this we have to import RouterProvider from react-router-dom.
    4.If you see below example, earlier we render App.js but to use routing we have to render RouterProvider to provide the routes.
4.There are many ways to configure routing but CreateBrowserRouter is the recommended way to create router.
5.Suppose, user type wrong url or that path is not available then react will show their error page that 404 not found.
6.We can create our own error page, to create our own error we have another key in the path object, errorElement in the CreateBrowserRouter
7.React Router DOM give us a hook that is useRouteError. It is used to give some more information about why the error is occured. Whenever an error occured react will give a message as an object using useRouteError hook.
8.How to recognize which is the hook ---> Whenever you see a word starting with a use

// WHat if i want to create Children Routes
1.We have to write children configure in the createBrowserRouter. Children is a list of path.
2.If we want to put header and footer on its place and only want to change the body or some other component then we have to use children key in createBrowserRouter and Outlet component.
3.Whenever we have to navigate to some urls by clicking on a button, never use anchor tag. beacuse whole page get refreshed using anchor tag.
4.Use Link component instead of anchor tag which is given by react-router-dom. If you use Link component then the whole page will not refresh instead only component will refresh that's why we called React applications are "Single Page Application" SPA

// There two types of routing in web Application
1.Client Side Routing  --> In react, client side routing is happening. It doesn't make any network call. At the first time it will call all the required network and browser have that all the code. So whenever we navigate to any other url using Link component then it quickly renders the component. 
2.Server Side Routing  --> Suppose, we have a home.html, about.html, contact.html and when i click on any of the links it will call the request of that url and send the response back that is called server side routing.




// --------------Dynamic Routing--------------------
1.If we have to make dynamic routing then we have to use :id and useParams hook


// UseParams
1.UseParams is a hook given by react-router-dom
2.Useparams return object of dynamic parameters

    
// Link is a component which is given by react router dom and Link is using anchor tag behind the scenes.




4.Ex:


import React from "react";
import ReactDOM from "react-dom/client";
import  Header  from "./components/Header";
import Body from "./components/Body";
import {CreateBrowserRouter, RouterProvider} from 'react-router-dom';

// Top level Component
const AppLayout = () => {


    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const appRouter = CreateBrowserRouter([
        {
            path:'/',
            element:<App />
            errorElement:<Erro />
        },
        {
            path:'/about',
            element:<About />
        }
    ]);
    
    
    const rootDOM = ReactDOM.createRoot(document.querySelector('#root'));
    rootDOM.render(<RouterProvider router={appRouter} />)








*/
