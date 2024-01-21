/*

-------Single Responsibility Principle-----------
1.In our project, we have to keep component following single responsiblility principle.
2.Feature:
    a.It become easy to test every component separately if any bug is found.
    b.We have to keep modularity in our code.
    c.Resusability 
3.The Single Responsibility Principle (SRP) is a principle from the SOLID principles, a set of object-oriented design principles that aim to make software more maintainable, scalable, and flexible. While the SOLID principles are not exclusive to React or any specific technology, they are valuable guidelines for writing well-structured and maintainable code.
4.In the context of React, the Single Responsibility Principle emphasizes that a component should have only one reason to change. This means that a React component should have a single responsibility or purpose. If a component is responsible for multiple tasks or functionalities, it becomes more difficult to understand, maintain, and modify.
5.Here are some practical considerations for applying the Single Responsibility Principle in React:
    a.Separation of Concerns: Divide your application into smaller, more manageable components, each handling a specific concern or aspect of the user interface. This makes it easier to reason about each component individually.

    b.Component Responsibilities: A React component should ideally be responsible for rendering UI elements, handling user interactions, and managing its own state. If a component is also responsible for data fetching, business logic, and other unrelated tasks, it violates the Single Responsibility Principle.

    c.Reusable Components: Write components in a way that makes them reusable in different parts of your application. If a component is too tightly coupled with specific functionality, it becomes less reusable and harder to maintain.

    d.Container and Presentation Components: Consider separating container components (responsible for data fetching and business logic) from presentation components (focused on rendering UI). This helps maintain a clean separation of concerns.


----------custom Hooks----------------
---> Hooks are nothing but a utility functions, helper function which is already defined in react.
1.creating custom hooks is not mandatory but if we do then, our code will be more readable, optimized and modular and reusable
2.Create custom hooks in Utils folder and create separate file for each custom hooks.
3.Here are some uses of custom hooks:
    1.Reusability: Custom hooks allow you to encapsulate logic and reuse it across different components. This promotes a modular and maintainable codebase.

    2.Abstraction of Complex Logic: If you have complex logic that involves state and side effects, custom hooks provide a clean way to abstract that logic into a reusable function.

    3.Composition: You can compose multiple custom hooks to create more complex behavior. This allows you to build on smaller, focused pieces of logic.

    4.Readability and Separation of Concerns: By extracting logic into custom hooks, your component code remains concise and focused on rendering, making it more readable. The logic is separated from the component, promoting better organization.

    5.Testing: Custom hooks can be tested independently, providing a way to ensure the correctness of the logic before using it in different components.

    6.Avoiding Prop Drilling: Custom hooks provide an alternative to prop drilling, where you pass data through multiple layers of components. Instead, you can encapsulate the logic in a hook and use it wherever needed.
In summary, custom hooks in React are a powerful way to encapsulate and reuse logic across components, promoting code reusability, readability, and maintainability. They are especially useful for handling complex state management and side effects in functional components.


Note:
    1.It's not mandatory but always start name for custom hook like useCustom_Hook_Name(). It is recommended by react.


// To break down our app into smaller logical file
// Chunking
// Code splitting
// Dynamic bundling
// Dynamic import
// Lazy loading(on demand loading) -- Beacuse it will not execute the code unitl we go to that component adn when we clicked on it then only it will load with separate js file.
    How to use lazyloading
    so, lazy() is a function which is given by react with the help of this we can perform on demand loading.
    If you want separate js file for a particular components then we can use lazy function to do that.
    To reduce the bundle size we use this lazy laoding to show UI and with separate file.

Lazy():
    1.In React, lazy() is a function that allows you to load a component lazily. This means that the component is not loaded until it is actually needed, improving the initial loading time of your application by splitting the code into smaller chunks.

    2.The lazy() function is typically used in combination with React's dynamic import() function, which allows you to asynchronously load a module. Here's an example of how you might use lazy() with import():
    3.Ex: 
        import React, { lazy, Suspense } from 'react';

        const LazyComponent = lazy(() => import('./LazyComponent'));

        function MyComponent() {
        return (
            <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
            </Suspense>
        );
        }
    4.In this example:

        lazy(() => import('./LazyComponent')) creates a lazy-loaded version of the LazyComponent. The import('./LazyComponent') statement is wrapped in an arrow function to ensure that the import is only triggered when the component is actually rendered.

        <Suspense fallback={<div>Loading...</div>}> is a component that lets you "suspend" rendering while the lazy-loaded component is being loaded. The fallback prop specifies what to render while the component is loading.

        By using lazy() and Suspense, you can optimize your React application's performance by splitting it into smaller, more manageable chunks and only loading the code that is necessary for the current view. This can be particularly beneficial in large applications where loading all the code upfront might lead to slower initial load times.


<Suspense></Suspense>:
        <Suspense> is a React component that enables declarative handling of loading states in a React application. It's used in combination with the lazy() function to enable lazy loading of components and to manage the loading state of those components. <Suspense> allows you to "suspend" rendering while some asynchronous work, such as fetching data or loading a component, is being performed. During this time, you can specify a fallback UI to be displayed, making the user experience smoother.

        Here's a breakdown of how <Suspense> works: 

        1.Lazy Loading with lazy():

                import React, { lazy, Suspense } from 'react';
                const LazyComponent = lazy(() => import('./LazyComponent'));
                
                The lazy() function creates a lazily-loaded version of a component. In the example, LazyComponent will only be loaded when it's actually needed.
        2.Using <Suspense>:
                    function MyComponent() {
                        return (
                            <Suspense fallback={<div>Loading...</div>}>
                            <LazyComponent />
                            </Suspense>
                        );
                    }
                    <Suspense> is wrapped around the component (<LazyComponent>) that might require some asynchronous loading.
                    The fallback prop specifies what to render while the suspended component is being loaded. In this example, it renders a simple "Loading..." message.
        3.Handling Asynchronous Loading:
                    When the MyComponent renders, React will automatically suspend rendering and show the fallback UI (<div>Loading...</div>) until LazyComponent is loaded. Once the lazy component is loaded, it replaces the fallback UI, and the application continues rendering as usual.


*/