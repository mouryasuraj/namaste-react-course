import React from "react";
import  ReactDOM  from "react-dom/client";
const rootDOM = ReactDOM.createRoot(document.getElementById('root'));

// HOw to create element
// const h1 = React.createElement(
//     'h2',
//     { id: 'heading' },
//     'Hello world from React!'
// );
// console.log(h1);   //This is a react element and it console Object with their properties
// rootDOM.render(h1) //This render method take the h1 object and convert it into h1 element and render it to the root element which is inserted into React.createRoot() function


// How to create nested element using react
/*
Ex: <div id='parent'>
        <div id='child'>
            <h1>hi, I'm h1 tag</h1>
        </div>
    </div>
*/
// const parent = React.createElement('div', { id: 'parent' },
//     React.createElement('div', { id: 'child' },
//         React.createElement('h1', {}, "hi, I'm h1 tag"))
// )
// console.log(parent);//It will print Object which is react element not html element and while rendering render() method convert react element into html element
// rootDOM.render(parent)

// If you want to create siblings use []
/*
Ex:     <div id='parent'>
            <div id='child1'>
                <h1>hi, I'm h1 tag</h1>
                <h2>hi, I'm h2 tag</h2>
            </div>
            <div id='child2'>
                <h1>hi, I'm h1 tag</h1>
                <h2>hi, I'm h2 tag</h2>
            </div>
        </div>
*/

const parent = React.createElement('div',{ id: 'parent' },
    [
        React.createElement('div', { id: 'child1' },
        [
            React.createElement('h1', {}, "hi, I'm h1 tag 😌"),
            React.createElement('h2', {}, "hi, I'm h2 tag"),
        ]),
        React.createElement('div', { id: 'child2' },
        [
            React.createElement('h1', {}, "hi, I'm h1 tag"),
            React.createElement('h2', {}, "hi, I'm h2 tag"),
        ])
        
    ]
)
// Above code look difficult to understand if we have lots of elements. Here JSX Comes into picture where we can write html like element in the javascript just like we write html tags


rootDOM.render(parent)