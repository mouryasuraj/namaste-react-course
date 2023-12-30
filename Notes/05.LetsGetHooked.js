// I have written code in the src folder, file name : 05.LetsGetHooked.js
// Always make a separate file for every component because its more readable than putting all the component in a single file.
// File structure of React:  https://legacy.reactjs.org/docs/faq-structure.html
// We can use .js or .jsx. It hardly matters. Use whatever you want.
// Whenever we make component always export it before importing.
// If you don't put extension at the time of importing then it's fine. Use if you want.
// Never keep hardcode data in component. Always create separate folder for it and keep these type of hardcode data into that   folder.
// ----> 1.Create a folder and name it to Utils and under this folder create a file "constant.js". All the hardcoded things comes into this file.
// Export and Import
/*
    1.There are two types of export
        a.default export  ex: export default App
        b.named export     ex: export {logoURL, CDNURL} or write export before variable   ex: export const name = "Suraj"
    2.There are two types of import
        a.default import ex: import App from './App'
        b.named import  ex: import {logoURL, CDNURL} from './constant'
    3.Named export is used when you have to export multiple things from  file
    4.default export is used when you have to export only one things from file
    5. In one file, I can only have one default export and have multiple named export
    6. If you have default export then use directly to export it   ex: import RestaurantCard from './component/Restaurant'
    7. But if you have named export then use curly braces to import   ex: import {LOGOURL, CDNURL} from './constants'
*/

// There is a standard practice that your file should not exceed more than 100 line. It's not a rule but a standard that most of the company following. If you use standard code then it become easy to understand by any developer.

/* 
// Create a feature
--> Lets create a feature that if you click on that button then show me top rated restaurant(Show restaurant which has more than rating )
--> If we want to change something on the action of onclick then use onClick attribute in react which takes an call back function and run immediately when user click on the button.
---> State variable: Super powerful variable(using hook)

// Hooks: Hooks is just a normal JavaScript utilities function which is prebuilt in JS and have super power. Some logic is written by facebook developer.
--->1. Two important hooks:
        1.Use State() :
            1.It use to give superpowerful state variables in react.
            2.First, we have to import useState from react like " import { useState } from 'react' "
            3.Why we called useState a state varaible:
                a.It maintain the state of your comonent
            4.How to create useState
                a.First import useState from react
                b.create state variable like:
                    const [state, setState] = useState([]);
                c.Like we give initial value to normal variable, then same with state variable, we have to give initial value. and this value become the default value of that variable(state)
                d.If we want to update or modify the data then we have to use setState function.
                e.What is render?
                --> Whenever a state variable update, react re-render the components.
        2.Use Effect()
    2.There are multiple hooks but 99% we use useState() and useEffect() and 80% we use useState and 1% use other hooks
*/


/**
 * ---> Reconciliation:
 *          1.It also known as React fibre.
 * 
 * ---> Virtual DOM:
 *          1.Virtual DOM is not an actual DOM.
 *          2.Virtual DOM is an representation of actual DOM.
 *          3.Virtual DOM is nothing but a JavaScript Object. If we console.log(<Body /> compenent, it will show object and that
 *            is exactly how virtual DOM Looks)
 * 
 * ---> Diff Algorithm:
 *          1.Diff algorithm finds the difference between previous virtual DOM and new virtual DOM.
 *          2.It checks the difference between old and new virtual DOM and then it will update the actual DOM in every render
 *            cycle.
 */


