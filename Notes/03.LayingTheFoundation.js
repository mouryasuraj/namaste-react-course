/*
Script:
    1.To start a dev build we have to run 'npx parcel index.html' command.
    2.There is another way to start or build that we can add script in the package.json file.
    3."start":"parcel index.html"
    4."build":"parcel build index.html"
    5.When we have to start a dev or build then just used script command like "npm run start or npm start" both are calling 'parcel index.html' behind the scene.


React.createElement()===> React.createElement creates an object when we render this object it will convert into the html then it will be an html element.
React.createElement() ===> Object ===> render() ===> html Element or html tag.

Points:
    1.Frameworks or library are used to merge the html, javscript and css, so that we can do that in same file

--------JSX----------
    1.JSX is not a part of React.
    2.JSX is place where we can write html,css and javscript together.
    3.JSX is not html inside javscript.
    4.JSX is html like syntax.
    5.JSX is a syntax. At the end, element in jsx is react element which is an object
    6.const jsxHeading = <h1 id="heading">JSX heading 👌</h1> 
        a.This is JSX. This is not a pure javascript. Javascript not understand this.
        b.It only understand ecamascript (es6 the latest version).
        c.This in not a valid pure javscript. Because js engine or browsers can't read this code.Copy this code and past it into the browser it will throw an Syntaxerror. 
        d.But this code is working here because of parcel. Parcel is responsible for this. 
        e.It is transpiled( means convert code into that code which browser or JS or react can understand) by parcel before it going to the js engine. And then browser receive the code which can understand by js engine.
        f.This code transpiled by parcel manager and babel(it is a js compiler or transpiler) convert this jsx into code that react or browser understand
        g.babel is a transpiler which is a special type of compiler.
        g.If you have to give attribute to jsx you have to follow camelCase format.
        h.If you want to write multiple lines of jsx then we have to wrap jsx into parenthesis. If it is a single line of code then no need to put parenthesis.
babel----> https://babeljs.io/

----------React COmponents------------------
    1.There are two ways to create components:
        a.class based componenet-->Old way to create components
        b.Fucntional componenet-->New way to create components

    2.React functional components
        a.React functional component is just like normal function in javascript but named function with first letter as a capital letter and it return some piece of JSX
        b.A function which return a react element because at the end JSX is an react Element.
    3.What is component composition?
    --> Composing component into another component is called component composition.
    4.{} we can write any javascript code inside it.
    5.JSX prevent cross-site scripting attack for you.
*/


// Progress of leacture
// Inception - Completed
// Igniting our app - Completed
// Laying the foundation - completed