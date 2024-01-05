/*

1.What is Microservice?
--->    1.It is known as Separation of concerns and single responsiblity
        princliple where each and every service have its own job.
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


2.What is Monolith Architecture?
--->    1.Monolith Architecture,is also known as Monolithic Architecture, is a traditional software architectural style where an
        entire application is designed as a single unified codebase.
        2.In a monolith, components such as UI, buisness logic and data access are tightly integrated in a single codebase.
        3.key characteristic:
            a.Single Codebase: The entire application developed, deployed and maintain as a single codebase.
            b.Tight Coupling: Components are tightly interconnected, and changes in one part of application may affect the other parts
            c.Development and Deployment: Monolith applications are often simpler to develop and deploy, as there is only one codebase to manage
            d.Technological Homogeneity: Since all components are the same part of the application, they often share the same technology stack.
            e.Disadvantage: Modularity, scalability, and flexiblity.



3.What is the difference between Monolith and Microservice?
--> 1.Monolith:
        A. The monolith architecture consists of a single, indivisible unit. The entire application developed, deployed, and scaled as one piece.
        B. In a monolith, all components(Ex: UI, database access, business logic) are tightly coupled. Changes to one part may require rebuilding and redeploying the entire application.
        C. Scaling a monolith involves duplicating the entire application, which might not be efficient if only certain part of the application require additional resources.
        D. Typically, a monolith architecture is built using single technology stack, as all component are part of the same codebase.
    2.Microservice:
        A. Microservices architectural decomposes an application into a set of small, independent servieces, each services focused on a sepecific business capability. Each service operates as a separate unit.
        B. Microservices are designed to be loosely coupled. Each services is independent, can be developed, deployed, and scaled independently of others.
        C. Individual microservices can be scaled independently based on the specific need of a each service. This provides more efficiency 
        and flexibility in resource allocation.
        D. Different microservices within an application can use different technology stack, enabling teams to choose the best tools for each service.


4.Why do we need a useEffect Hook?
---> useEffect is used to manage side effects of functional components. SideEffects are operation or behaviour that occur outside the scope of typical component rendering, sucha as, data fetching, subscription, manual DOM manipulation and etc.
Some of the primary purpose of useEffect:
    1.Executing code after rendering
    2.Data fetching from API's
    3.Subscriptoins
    4.Manual DOM manipulation.
    5.Timers and Intervals.
    6.Clean up and avoid memory leaks.


5.What is Optional Chaining?
--> 1.Optional chaining is a feature introduced in javascript(also supported some of the progaramming language) that simplifies the process of  accessing properties and methods of nested objects or calling functions when there's possiblities the value in the chain may be null or undefined.
    2.It helps to avoid erros like "cannot read propery "somthing" of undefined"
    3.Optional chaining provides a concise and safe way to work with nested object structures and function calls, especially when dealing with data that may not be fully populated.

6.What is Shimmer UI?
--> 1.Shimmer UI is a design technique used to provide users with a visual indication that content is loading or being fetched in an application. It is commonly employed in situations where data retrieval might take some time, and developers want to communicate to users that the application is actively working on fetching the necessary information.
    2.Key:
        a.Placeholder animation
        b.Imitating Content Structure.
        c.Subtle and non intrusive
        d.used in loading state

7.What is the difference between JS expression and JS statements?
-->1. JS Expressions:
        A.An expression is a piece of code that produces a value. It can be as simple as literal value(ex: 5, "Helloe") or a more complex combination of values, operaiton and funcitons call.
        B. Ex: 5+3, "Hello", myFunction()
    2. JS Statements:
        A. A statement is a large unit of code that perform a specific action but doesn't necessarily produce value. Statements are oftern instruction that control the flow of program, declare varaible and perfrom other tasks.
        B.Ex : let x = 5, console.log("Hello")



8.What is conditinal rendering?
--> 1. Conditional rendering is a way to render component according to the given conditions. 
    2.Conditional rendering refers to the practice of conditionally rendering parts of a user interface based on certain conditions or criteria in a software application. In other words, it involves displaying different components or content in the UI based on the evaluation of specific conditions at runtime.
    2.Ex: 
        if(isLogged){
            return <LogInPage />
        }else{
            return <Home />
        }
        OR
        {isLoggedIn} ? <h1>Welcome</h1> : "Please log in to access the content"
    3.Other scenarios:
        --> Rendering Lists, Handling loading state, User permissions, form validation.

9.What is CORS?
-->1. CORS stand for Cross Origin Resource Sharing
   2. It is a security fearture implemented by browser to restrict web pages from making requests to a different domain than the one that served the web page.
   3.It is a feature which is used by web browser to control how web pages in one domain interact with resources such as (APIs and data) hosted on other domain.
  
10.What is async and await?
-->1. Async and Await is a keyword in JS that are used to work with Asynchronous code and Promises in a more synchronous and readable manner.
   2. They were introduced in Ecmacript 2017(ES8) to simplify the handling of asynchronous operations.
   3.Async keyword is used to declare asynchronous function. Asynchronous functions returns a promise implicitly and it allow to use await keyword within its body.
   4.Await keyword can only be used in async function. It is used to pause the execution of asynchronous function until the promise resolved, and it returns the resolved value of the Promise.
   5.It's important to note that async functions always return a Promise, and the value they return or throw is used to resolve or reject that Promise. The use of async and await is especially common when working with asynchronous operations like fetching data from APIs, reading files, or making database queries.


11.What is the use of `const json = await data.json();` in getRestaurants()?

-->1.await data.json();: This part of the code uses the await keyword to pause the execution of the getRestaurants() function until the asynchronous operation represented by data.json() is complete. The json() method is a built-in method provided by the Fetch API, and it returns a Promise that resolves to the parsed JSON data from the response body.
2.const json = ...: Once the Promise returned by data.json() is resolved, the result (parsed JSON data) is assigned to the variable json. The const keyword is used to declare a constant variable, meaning its value cannot be reassigned.

   
*/