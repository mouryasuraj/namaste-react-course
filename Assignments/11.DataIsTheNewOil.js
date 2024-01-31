/*

1.What is prop drilling?
--> 
    a.Prop drilling is a term used in the context of software development, particularly in the context of React, a JavaScript library for building user interfaces. It refers to the practice of passing down data (props or properties) from a higher-level component to a lower-level component in the component tree. The term "prop" is short for "property."

    b.In React, components are the building blocks of a user interface, and they are organized in a tree-like structure. Each component can have its own state and behavior. However, there are situations where you need to share data or functionality between components that are not directly connected in the component tree. Prop drilling is one way to achieve this by passing data through intermediary components.

    c.Here's how prop drilling typically works:
        1.Parent Component: The top-level or higher-level component in the hierarchy holds the data that needs to be shared with components deeper in the tree.
        Code: 
            const ParentComponent = () => {
            const dataToPass = "Hello from Parent!";
            return <ChildComponent data={dataToPass} />;
            }
        2.Intermediate Components: Components in between the parent and the target component(s) receive the data as props and pass it down further through their own props.
        Code:
            const IntermediateComponent = (props) => {
            // Some logic or processing can be done here
            return <ChildComponent data={props.data} />;
            }
        3.Child Component: The final or lower-level component receives the data as props and can use it for rendering or other purposes.
        Code:
            const ChildComponent = (props) => {
            return <p>{props.data}</p>;
            }
    d.In the above example, ParentComponent holds the data, which is then passed as a prop to IntermediateComponent, and finally to ChildComponent. This way, the data travels through multiple components to reach its destination.

    e.While prop drilling is a straightforward way to share data between components, it can lead to code that is hard to maintain, especially as the application grows. As a result, developers often look for other solutions like using state management libraries (e.g., Redux) or context API to avoid the need for prop drilling and make data sharing more efficient and scalable. These alternatives provide a centralized way to manage and access shared state without passing props through multiple layers of components.


2.What is lifting state up?
--> 
"Lifting state up" in React refers to the practice of managing the state of a component higher up in the component tree, typically in a common ancestor, and passing that state down to child components as props. This is often done to share state and behavior between components.

3.What are context provider and context consumer?
-->
    1.In React, the Context API provides a way to share values like props between components without explicitly passing those values through each level of the component tree. It consists of two main components: the Context Provider and the Context Consumer.

    a.Context Provider:

    The Context.Provider component is used to wrap a part of the component tree where you want to make a certain value (such as state or a function) available to child components.
    It takes a "value={}" prop that represents the value you want to share.
    The value provided by the Context.Provider will be accessible to any descendant components that are Context Consumers.

    b.Context Consumer:

    The Context.Consumer component is used to consume the value provided by the nearest Context.Provider ancestor in the component tree.
    It uses a render prop function that receives the context value as its argument.
    It allows components to access the shared value without the need for prop drilling.
 */