/*


// Monolith Architecture
--> 1.Monolith Architecture,is also known as Monolithic Architecture, is a traditional software architectural style where an
    entire application is designed as a single unified codebase.
    2.In a monolith, components such as UI, buisness logic and dataaccess are tightly integrated in a single codebase.
    3.key characteristic:
        a.Single Codebase: The entire application developed, deployed and maintain as a single codebase.
        b.Tight Coupling: Components are tightly interconnected, and changes in one part of application may affect the other parts
        c.Development and Deployment: Monolith applications are often simpler to develop and deploy, as there is only one codebase to manage
        d.Technological Homogeneity: Since all components are the same part of the application, they often share the same technoloty stack.
        e.Disadvantage: Modularity, scalability, and flexiblity.



// Micro Service Architecture
--> 1.This is known as Separation of concerns and single responsiblity princliple where each and every service have its own job.
    2.You can use any technology, framework or pragramming language in microservices to build a application.
    3.All services run on their own port numbers like port: 1234 is a UI
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
2.load---> render whatever you have like(skeleton) ---> API ---> render(This is the best approach in react)
      ---> Beacause in the 1st approach when data loads nothing is visible on the UI and then suddenly all the cards showed up that's why 2nd approach is better because when loading time it render something like skelton and when api succecfully called then it re render the cards

 */