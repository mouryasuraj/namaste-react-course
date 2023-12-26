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
    7. But it you have named export then use curly braces to import   ex: import {LOGOURL, CDNURL} from './constants'
*/

// There is a standard practice that your file should not exceed more than 100 line. It's not a rule but a standard that most of the company following. If you use standard code then it become easy to understand by any developer.