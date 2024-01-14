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
-->1.If you want to write comment in JSX, then we have to use curly braces and then we are able to write comment in JSX because in the curly braces we can write any valid javascript code.
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


6.What is reconciliation in React?
--> 1.In React, reconciliation refers to the process of updating the UI to reflect the most recent application state.
    2.When the state of React component changes, React follows a process called "Reconcilication" to efficiently update the DOM and keep it in sync with the virtual DOM.
    3.The virtual DOM is an memory representation of the actual DOM. When there is a change in the state or props of a component, React doesn't immediately update the actual DOM. Instead, it first update the virutal DOM, which is the lightweight copy of actual DOM. Then it performs a process called reconciliation to determine the most efficient way to update the real DOM.
    4.React uses diffing algorithm during reconciliation to identify the differences between the previous virtual DOM and the new Virtual DOM.
    5.Here are the key steps in the reconciliation process:
            a.Virtual DOM Comparison
            b.Reconciliation Algorithm
            c.Minimal Updates
            d.Real DOM updates

7.What is React fibre?
---> 
    1.Traditional Rendering Process in React (Pre-Fiber):
        a.Render and Reconciliation:
            1.When a component's state or props change, React initiates a process called reconciliation.
            Reconciliation involves comparing the new virtual DOM with the previous one to determine the differences.
            
        b.Synchronous Rendering:
            The reconciliation process was synchronous and often occurred in a single pass.
            Large updates could block the main thread, leading to performance issues, especially in complex applications.

        c.Introduction of React Fiber:
            React Fiber is a reimplementation of the core algorithm that drives React's rendering process. Its main goals are to make rendering more efficient, allow for better handling of asynchronous tasks, and enhance the overall performance of React applications.

        d.Key Concepts of React Fiber:
            1.Fibers:
                In React Fiber, the work is broken down into smaller units called "fibers."
                Fibers represent individual units of work that can be prioritized and processed incrementally.
            2.Incremental Rendering:
                React Fiber allows rendering work to be performed in smaller chunks, making it more interruptible.
                It can pause and resume work, enabling better responsiveness, especially in scenarios with frequent updates.
            3.Prioritization:
                Rendering work can be prioritized based on its urgency.
                High-priority work, such as user interactions, can be processed quickly, improving the perceived performance.
            4.Asynchronous Rendering:
                React Fiber introduces the concept of asynchronous rendering.
                Rendering work can be spread out over multiple animation frames, preventing jank and improving overall performance.

        e.Example Scenario:
            Consider a scenario where a user interacts with a button, triggering a state change in a React component. With React Fiber:

Prioritization:

The button click event is a high-priority update.
React Fiber ensures that this update is processed quickly, providing a more responsive user experience.


Incremental Rendering:

Rendering work related to the button click is broken down into smaller units (fibers).
These units can be processed incrementally, preventing long blocking times on the main thread.


Error Boundaries:
React Fiber also introduces the concept of error boundaries, allowing components to catch and handle errors gracefully without crashing the entire application.

Summary:
React Fiber is an internal implementation detail of React that enhances the rendering process by introducing concepts like fibers, incremental rendering, prioritization, and asynchronous rendering. While most React developers don't need to interact directly with Fiber, they benefit from the improved performance and responsiveness it provides, especially in complex and dynamic applications.
           

8.Can we use index as a key in React?
-->1. No. It is not recommoned by React to use index as a key. Instead you can use database id, etc.
   2. Beacause, if we use index as a key. Suppose a new child element render in the first place then index number of this element is 0 and it will shift the index to rest of the element then it may cause and crash your application or render wrong information.
   3. If you don't use key then browser never know which is the latest element and which is the previous one.
   4.Always use unique id for key if you don't have a unique id then only you can use index as a key.

9.What is props in React? Ways to
---> 1. In React, props also called as properties.
     2. It is a mechanism to pass data from parent component to child component.
     3.Props allow you to make react component dynamic and reusable by passing values as  attributes from one component to another.
     4.Ways to pass props in React:
            a.Directly pass to the component during rendering.
            b.Passing dynamic value like variable and expressions.
            c.Passing Multiple props.
            d.Default props.
            e.Destructuring Props.

10.What is config driven UI?
---> Config-driven UI, or Configuration-driven User Interface, refers to an approach in software development where the appearance and behavior of a user interface are primarily defined by configuration rather than hard-coded implementation. In other words, instead of writing code to describe how a user interface should look and behave, developers use configuration files or data to specify those details.

*/