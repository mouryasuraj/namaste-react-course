/*


// Monolith Architecture
--> 1.Monolith Architecture,is also known as Monolithic Architecture, is a traditional software architectural style where an
    entire application is designed as a single unified codebase.
    2.In a monolith, components such as UI, buisness logic and data access are tightly integrated in a single codebase.
    3.key characteristic:
        a.Single Codebase: The entire application developed, deployed and maintain as a single codebase.
        b.Tight Coupling: Components are tightly interconnected, and changes in one part of application may affect the other parts
        c.Development and Deployment: Monolith applications are often simpler to develop and deploy, as there is only one codebase to manage
        d.Technological Homogeneity: Since all components are the same part of the application, they often share the same technology stack.
        e.Disadvantage: Modularity, scalability, and flexiblity.



// Micro Service Architecture
--> 1.It is known as Separation of concerns and single responsiblity princliple where each and every service have its own job.
    2.You can use any technology, framework or pragramming language in microservices to build a application.
    3.All services run on their own port numbers like port: 1234--> is for UI
    4.Microservices architecture is a modern approach to design and building software application as a collection of
    small, independent services that communicate with each other through well designed API's.
    5.Each service in microservices architecture is developed, deployed and scaled independently, allowing great flexibility and scalability compared to traditional monolith architecture.
    6.key Characteristic:
        a.Modularity
        b.Independent Deployed
        c.Scalabilty
        d.Techonology diversity
        e.Resilience:Since services are independent, faliure in one application doesn't affect the entire application.
--> How these services interact with each other?
    :By API's

// Two approaches that how the data fetch from database?
1.load---> api ---> render
2.load---> render whatever you have, like(skeleton of component) ---> API ---> render(This is the best approach in react)
      ---> Beacause in the 1st approach when data loads. nothing is visible on the UI and then suddenly all the cards showed up that's why 2nd approach is better because, On the time of  loading it render something like skelton and when api succecfully called then it re render the cards
      


// useEffect Hook:
    1.UseEffect a just a normal js function which react gives with some specific function.
    2.syntax:
        useEffect(()=>{
            console.log("UseEffect called")
        },[])
    3.useEffect takes two argument first is a callback function and other is array of dependencies.
    4.The callback function which we have passed to the useEffect hoook is called after the component renders.
    5.If you want to show something after the render of the component then put inside it in useEffect function.

// What is CORS policy?
----> 1.Our browser block us to fetchdata from one origin to different origin due to CORS policy.


// What is optional chaining?
---> 

// What is Shimmering UI?
--->


// Conditional Rendering
---> 1.We can use conditional Rendering to show or hide componets for better UI experience.
     2. There are few ways for conditional rendering
        a.Using "If" statement
        b.Using Ternary operator
        c.using logical And(&&)
        d.using state variable


// WHat is granular rendering?
--->1. If a part of a component's state or props changes, React will typically re-render only the affected part of the component, not the entire part.This is known as "granular rendering."
    2.React re-render the whole component but it only updates the affect part of it.
    3.However, there are cases where react need to update the entire component.
        a.Pure Component:
        b.using forceUpdate() Method.

Rendering means that calling that function again.

// When using state variable in react, how can a constant variable can update?
--->Beacuse, every rendering cycle in react creates a new variable then it was before. 

// Whenever a state variable update, react triggers a reconciliation cycle(re-renders the components)
        
    */



// resume from 1:37:00 part 6