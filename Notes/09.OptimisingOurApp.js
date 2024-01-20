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


*/