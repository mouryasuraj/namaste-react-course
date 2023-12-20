/*

1.Is JSX mandatory for React?
--> 1.No, JSX is not mandatory for building React Applications, but it is a recommended and widely used syntax.
    2.JSX is a Syntax Extension for JavaScript that looks similar to HTML or XML and allow you to write React component in a more concise and readable manner
    3.Under the hood, JSX is transformed into Javscript using tools like babel before it is executed by the browser.
    4.While JSX is not strictly necessary, it greatly improves the readability of React Code.

2.Is ES6 mandatory for React?
--> 1.ES6 stands for Ecmascript 2015, is not strictly mandatory for React, but it is highly recommonded and widely used in the
    React ecosystem.React itself is a javascript library for building UI and it can be used with different versions of Ecmascript.
    
3.How can i write comment in JSX?
-->1.If you want to write comment in JSX, then we have to use curly braces and the we write comment in JSX because in the curly braces we can write any valid javascript code.
    2. For Example: 
            const App = () =>{
                return(
                    <>
                        { // This is a heading 1 }  This is how we can write comments in JSX.
                        <h1>HEading 1<h1/>
                    </>
                )
            }

4.What is <React.Fragment></React.Fragment> and <></>?
--> 1.<React.Fragment></React.Fragment> is used to group multiple element with introducing a new DOM element.
    2.<></>. It is same as React.fragment, only difference is this is an shorthand for React.fragment.
    3.<></> THis synatax introduced in React 16.2, if you are using older version then don't use the latest syntax instead of this use older one(<React.Fragment></React.Fragment>)

5.What is Virtual DOM?
--> 1.The Virtual DOM(Document Object Model) is a programming concept used in web develpoment and popularized by libraries like React. 
    2.It's not specific to React, but is frequently associate with it.
    3.The Virtual DOM is an abstraction of the HTML DOM, represented in memory as a lightweight copy. The primary purpose of virtual DOM is to improve the efficiency of updating the UI.
    
    Here's how the virtual DOM works:
            1.Representation of DOM in Memory:
                a.When you create a UI in a web application, the browser construct a DOM tree to represent the structure of the document
                b.The virtual DOM is a lightweight, in memory representation of this DOM tree. It's a javascript object that mimics the structure of the actual DOM 
            2.Rendering React Compenent:
                a.When you use React to buld a UI, you create component that describe how the UI should look at any given point in time.
                b.React uses these component to build a Virtual DOM representation of the UI.
            3.Reconciliation Process:
                a.When the state of a react componenet changes(due to user interaction, data changes, etc.), a new virtual DOM representation is created.
            4.Difference calculation(Reconciliation):
                a.React then calculates the difference between the new virtual DOM and a previous one. This process is called "reconciliation" or "diffing"
                b.React identifies the minimal number of changes needed to update the virtual DOM to match the new state.
            5.Update to actual DOM:
                a.One react determines the changes needed, it update the actual DOM with only the necessary modifications
                b.This selective update process is more efficient than directly updating the actual DOM or manipulating the entire DOM tree.

*/