/*
// Basic overview of class based components

1.Class based component is a olderway to create component.
2.Class component is just a normal javascript class in react.
3.syntax:
    class UserClass extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                count:0,
                listofres: []
            }
        }

        render(){
            //piece of jsx
        }
    }
4.Here,if you extends React.Component then react will know that this is a class based component.
5.render() method is used to return some piece of js code.
6.Fucntion component is normal js fucntion which return some piece of jsx and class based component is just a normal class which has render() method which return some piece of jsx.
7.UserClass extends React.Component, here component is a class which is present in React package. So, userClass is extending Component class, it means that we can use method available in Component class.
8.When a new instance of class is created, initially constructor is called and fetch props from the component where its instance is created.
9.super(props) is used to call the parent's component class before your code is execute. This is because contructor may have some initial logic to execute, to run these codes we have to call super(props) method and passing props as a object.

// note: mounting - invoking a fucntion

// How to create state and local variables in class based components

1.WHen we loading class based component it means that we creating instance of that class.
2.When instance of class is create, constructor method will be call, and this is the best place in class based component to receive props and create state variable.
3.We can create state variable like this:
    constructor(){
        this.state = {
            coutn:0
        }
    }
4.state is a reserved keyword in js and state take big object of state variables
5.In functional based component we have to create separate state variables but behind the scene react collect all the useState variable in big object.

// How to update these state variables in class based components:
1.Never update state variable directly like this:
    this.state.count = this.state.count++
2.Update like this:
    this.setState({
        count: this.state.count + 1
    })
3.this.setState() take an big object to update state variables.


// Lifecycle of class based component:

// How code is mounted on the web page
1.Lets example of About.js component
2.In this component, a class based component is there and react will run the code line by line and when Class component line comes, it creates the instance of that class and the first things is called in class component is constructor then it will call the render() method.

// componetDidMount() - method in class component
1.It will call after the render method is called.
2.It only called once in a program at the initial time after render() method
3.The method name itself said component is mounted on the browser.
4.It is used to make api call, subscription, DOM manipulations, setting up timers
5.We used to make api calls in componentDidMOunt() because first it renders whatever we have in our code and then componentDidMount calls and make an api call and re-render the component with updated values.
6.Like useEffect(), but useEffect is used to handle all lifecycle. and in componentDidMount() is only called once initially. to update the the component when something is change, we have to use componentDidUpdate()


// confusion:
// What we expect
if we console then :
    Parent constructor
    Parent render
        - first constructor
        - first render
        - first didMount
        - second constructor
        - second render
        - second didMount
    Parent didMount

// What it will print
if we console then :
    Parent constructor
    Parent render
        - first constructor
        - first render
        - second constructor
        - second render
        - first didMount
        - second didMount
    Parent didMount

To clear this confusion see the lifecycle diagram of class based component
--> https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

1.In the diagram, it shows that lifecycle of class based component is divided into two part:
1.Render Phase:
    a.Constructor and Render Method is comes into Render Phase.
    c.In our code, first constructor will call and then render will called of parent and then constructor and render will be batched together and perform render phase and then together they perform commit phase.
    Basically, React create children batches to optimize the code. 
    Updating the DOM, is most expensive thing, so that's why react make batches of render phase separate and commit phase separate and run separately
2.Commit Phase
    a.React Update the DOM and ComponentDidMount Comes under Commit Phase.


// LifeCycle - class based component

// ------Mounting---------
Render Phse:
    1.Constructor state-(dummy data)
    2.render(dummy data)
Commit Phase:
    3.html update with dummy data
    4.componentDidMount() called and setState with api data
    then updating cycle starts

// ------Updating---------
    After comononentDidMount() data set to api data
    again reconciliatino process will start
    1.render(api data)
    2.html update with api data
    3.Then, at the end componentDidUpdate() call

// --------Unmounting-------
    1.It will call before any component unmount or remove from the dom.
    2.componentWillUnmount is a lifecycle method in React class components that gets called just before a component is unmounted or removed from the DOM. It provides an opportunity to perform cleanup tasks, unsubscribe from external services, or clear up resources associated with the component.

Note: 1.Never ever compare useEffect with componentDidMount(). They have some similar properites but both are different from each other.
      2.If i want to call componentDidMount every time when some props or state has changes then in earlier days in class based component we have to write code like this:
        componentDidMount(prevProps, prevState){    
            if(this.state.count !== prevState.count || this.state.count1 !== prevState.count){
                //logic
            }
        }
        3.To rid of these code, useEffect is made to make developer life easier.
            useEffect(()=>{

            },[count, count1])
        4.IN useEfffect, we can pass array of dependency, and it will only call if any of props or state has changes. In class based componet we have write and check each state and props but in useEffect we can directly pass props or states, react will handle all these behind the scenes


// componentWillUnmount()
1.Lets take an example, suppose we have setInterval in componentDidMount() and setINterval is set to 1s.
2.So, what happen in componentDidMount is it only called at the time of initial render but it will run continuouly when changing the component beacuse its not refereshing the page so that's why it it calling again and again.
3.And when you go to again on that component it will create another setInterval for 1s
4.Now, here comes a picture of componentWillUnmount(); so we can clear this type of cons in our app;
5.How:
            componentDidMount(){
                this.timer = setInterval(()=>{
                    console.log("INterval")
                },1000)
            }
            componentWillUnmout(){
                clearInterval(this.timer) // It will clear the interval before unmounting the component.
            }
6.If we do setInterval in useEffect() then, there also we have to clear the interval:
how:
            useEffect(()=>{
                const timer = setInterval(()=>{
                    console.log('Hello')
                })

                return ()=>{
                    clear
                }
            },[])
 */