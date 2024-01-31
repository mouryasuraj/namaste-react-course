/*

//What is Higher Order Components?
-->
   1.Higher Order COmponents are a function which takes a component and enhance the component and then return a component. 

// IMportant
1.Every react application have two layer:
   a.UI Layer
   b.Data Layer
   c.Accordion feature in restaurant menu list  
   // Read about: 
   // Controlled and Uncontrolled components using accordion feature
   // Lifting State up concept
   // Props drilling


// Props drilling
1.In react, If you want to pass data to the nested children then you have to pass like this, parent to children and children to their children and so on....
2.This is known as props drilling. And it is a problem in react
3.To resolve this issue we can use React context API
4.Props drilling is the problem and context api is the solution.
5.So, how to create context
   1.First, make a separate file for context in Utils folder 
   2.createContext is a utils function given by react to create context
   3.To use the context anywhere in your program, we have hook called "useContext" for functional based component
      createContext({
         loggedInUser:"Default user"
      })
   4.For class based component we have to use 
   <UserContext.Consumer>
   {({loggedInUser})=> <h1>{loggedInUser}</h1>}
   </UserContext.Consumer>
   5.if we have to pass the new data to the context then we have to use Context provider
   6.<Context.Provider></Context.Provider> is used to provide the update value of context. we have to wrapped those components where we want to update the context or use the context.
   7.We can provide Context for a specific component also
*/      


// Features in this episode
// 1.Promoted Feature in swiggy web app
// 2.Accordion feature to show item list
// 3.Accordion feature to show only one accordion item at a time using "Lifting state up" concept in react