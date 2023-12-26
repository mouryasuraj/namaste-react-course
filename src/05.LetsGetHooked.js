
import React from "react";
import ReactDOM from "react-dom/client";
import  Header  from "./components/Header";
import Body from "./components/Body";



// Top level Component
const AppLayout = () => {


    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


const rootDOM = ReactDOM.createRoot(document.querySelector('#root'));
rootDOM.render(<AppLayout />)