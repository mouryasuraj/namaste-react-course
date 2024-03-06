/*

1.How do you creates nested routes react-router-dom configurtaion?
---> 
    1.Install react-router-dom in your project using:
       -->  "npm i react-router-dom"
    2.Import createBrowserRouter() from react-router-dom in entry level js file like App.js or index.js:
        import {createBrowserRouter} from 'react-router-dom';
    3.Create a variable and assigned createBroweserRouter() to it. 
       -->  const appRouter = createBrowserRouter()
    4.Pass an array of objects in createBrowserRouter() as a argument.
       -->  const appRouter = createBrowserRouter([{},{}])
    5.In the array of object, we can pass the key of path, element, error(Once, we create error element at the top level of object then it will handle all the error).
       -->  const appRouter = createBrowserRouter([
                {
                    path:'/',
                    element:'<App />',
                    errorElement: <Error />
                }
                {
                    path:'/about',
                    element:'<About />',
                }
            ])
    6.If we want to create nested router then we need to put children key in the object where we want to create children.
    7.Children also take array of objects which have path, element, children ,errorElement, etc keys.
       -->  const appRouter = createBrowserRouter([
                {
                    path:'/',
                    element:'<App />',
                    children:[
                        {
                            path:'/',
                            element:<Home />
                        },
                        {
                            path:'/contact',
                            element:<Contact />,
                            children:[
                                {
                                    path:'/',
                                    element:<Person />
                                }
                            ]
                        },
                        {
                            path:'/cart',
                            element:<Cart />
                        },
                    ],
                    errorElement: <Error />
                }
                {
                    path:'/about',
                    element:'<About />',
                }
            ])
    8.Subsequently, we have pass this appRouter to the RouterProvider component as a prop to show the components according to the path, but first we have to import RouterProvider from reat-router-dom.
       --> import {RouterProvider} from 'react-router-dom';
            
            const rootDom = ReactDOM.createRoot(document.getElementById('root));
            rootDom.render(<RouterProvider router={appRouter} />)
    9.All set with configuration of routes and nested router, only you need to create all the component provided in the path.


2.Read about createHashRouter and createMemoryRouter from react-router-dom?

3.What is the order of lifecycle methods calls in class based component?
--> 
    1.Mounting - There are two phases in Mounting:
            a.Render Phase:
                1.When an instance of that class is created then, first constructor(with some inital data or shimmer UI) will be call.
                2.After constructor render(render that initial data) method will call.
            b.Commit Phase
                1.HTML DOM update with initial data.
                2.Then after dom updated, componentDidMount will be call.
                3.Data will update with new data during comonentDidMount()
    2.Updating:
            a.Render Phase: 
                1.Render the element with new data.
            b.Commit Phase:
                1.HTML DOM update with new Data
                2.Then after dom updated, componentDidUpdate will be call
                3.ComponentDidUpdate is used to update every time if props or state changes.
    3.Unmounting: It will call the method just before component is unmounting.

4.Why do we use componentDidMount()?
--> 
    1.It is a part of lifecycle method in class based component.
    2.It is used to perform some actions or sideEffects like api's calling, after the component has been rendered into the DOM.
    3.It is called immediately after the component is mounted or inserted into the DOM tree.
    4.Use of it:
            1.API's calling
            2.Subscription to external resource
            3.Setting timers
            4.Mnipulationg DOM
    
5.Why do we use componentWillMount? Show with example?
--> 
    1.It is the last portion of lifecycle in class based component.
    2.It is used to clear some operation just before unmounted or removed from the DOM.
    3.Example:
            1.Suppose, you created a timeInterval in componentDidMount method.
                componentDIdMount(){
                    this.timer = setInterval(()=>{
                        console.log('Interval')
                    },1000)
                }
            2.And, I visited to other component like About Component, it will go to that componet, but still our setInterval is executing after i leave that component and when again visited to that componet then it create another setinterval.
            3.So, basically if i again and again render that componet it will create setInterval, that the problem, it can may be crash our application at some time.
            4.To avoid this issue, we use componentWillMount()
                componentDIdMount(){
                    this.timer = setInterval(()=>{
                        console.log('Interval')
                    },1000)
                }
                componentWillMount(){
                    clearInterval(this.timer);
                }
            5.We put our clearInterval in componentWillMount because before unmounting it will call.
    
6.why do we use super(props) in constructor?
--> 
    1.In the class based component, when you define constructor, it's important to call super(props) as the fist statement in the constructor.
    2.This is necessary when the component extends another class, like "React.Component".
    3.The super(props) call is responsible for invoking the parent constructor and initializing the "this" object.
    4.Without super(props) call, "this" object within the componet would not be properly setup, it would encountered unexpected behaviour.
    5.When you call super(props), you are passing the props object to the constructor of parent class.
    6.This allow the parent class to initialize its own properties related to the comopnent's props.
    7.If you omit props in super() method, then this.props in parent class might be undefined within your component, leading to erros when accessing the props.

7.Why can't we have the callback funciton of useEffect async?
--> 
    1.The useEffect hook in React is designed to handle side effects in a declarative way. 
    2.It allows you to perform actions after the component renders, such as data fetching, subscriptions, or manually interacting with the DOM. 
    3.While you can use asynchronous functions inside the useEffect callback, there are some important considerations to keep in mind.
    4.The useEffect callback itself cannot be declared as async because the return value of the callback is expected to be either a cleanup function or undefined. 
    5.If you make the useEffect callback async and return a Promise, React won't handle it correctly, leading to potential issues.

 */