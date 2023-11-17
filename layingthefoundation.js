import React from "react";
import ReactDOM, { render } from "react-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

/*

// React.createElement()===> React.createElement creates an object when we render this object into the html then it will be an html element.

//React.createElement() ===> Object ===> render() ===> html Element or html tag.



const heading = React.createElement('h1', { id: 'heading' }, 'Heading 😎'); //it gives an object. And this is not the best way to create html element so facebook developer created JSX--> Javascript syntax which is easier to create element
console.log(heading);
// root.render(heading);  //it will convert our object into html element



// JSX--- jsx is not html in js. It is an HTML or XML like syntax.

// How jsx works behind the scene
//jsx ===> babel transpiled to React.createElement ===> React.createElemet is an JS object ===> Html element
//bable is converted JSX into react.createElement

const jsxHeading = <h1 id="heading">JSX heading 👌</h1> //This is JSX. This is not a pure javascript. Javascript not understand this.It only understand ecamascript (es6 the latest version).This in not a valid pure javscript. Because js engine or browsers can't read this code.Copy this code and past it into the browser it will throw an Syntaxerror. But this code is working here because of parcel. Parcel is responsible for this. It is transpiled by babel (which is managed by parcel) before it going to the js engine. And then receive the code which can understand js engine.
console.log(jsxHeading);  //It is an react element which is an object
root.render(jsxHeading);  //it will convert our object into html element
*/





// ----------------React component----------------
/*

// React element
// const heading = (
//     <h1>Heading</h1>
// )

// Name a component's first letter with capital letter

// const HeadingComponent = () => <h1>Heading Component</h1> //some cool developer write like this if you have single line of JSX

const Title = () => <p>Title</p>


// React component
//Componenet composing another component is called composition component
const HeadingComponent = () => {
    return (
        <>
            <Title />
            <h1>Heading Component 🚀</h1>
        </>
    )
}



// root.render(HeadingComponent);  //This is not we can render a component. We can render element only this way. If you want to render a component then wrap into fragment <HeadingComponent />

root.render(<HeadingComponent />) //This is proper way to render component. It will understand by babel

*/





// ---------Practice component---------------

// Component using normal function
const Title = function(){
    return(
        <h1>Title</h1>
    )
}


// suppose we want to render element into component
const button = (
        <button type="button">Hello</button>
)

const name = 'suraj'

// component using arrow function
const Body = () => (
    <div>
        {Title()}
        <Title />
        <Title></Title>   {/*we can also write like this*/}
        {button}  {/*In this curyly braces we can write any javascriopt code. And this is how we can put react element into component*/}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quibusdam atque, a dignissimos excepturi in? Minus fugit sed alias architecto?</p>
    </div>
)

root.render(<Body />)