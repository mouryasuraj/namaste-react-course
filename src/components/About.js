import { Component } from 'react';
import Users from './Users'
import UserClass from './UsersClass';

// This is class based component
class About extends Component{

    constructor(props){
        super(props);
        console.log("Parent constructor");
    }
    
    componentDidMount(){
        console.log("Parent Did Mount");
    }

    render(){
    console.log("Parent render");
        return (
            <div>
                <h1>About Us Page</h1>
                <h2>Teams</h2>
                {/* 1.<Users name='Suraj Mourya (Fucntion)' location='Mumbai(Function)' /> */}
                <Users name='first' location='Mumbai(class)' />
                {/* <UserClass name='second' location='Mumbai(class)' />
                <UserClass name='third' location='Mumbai(class)' /> */}
    
            </div>
        )
    }
}


// This is functional based component

// const About = () =>{
//     return (
//         <div>
//             <h1>About Us Page</h1>
//             <h2>Teams</h2>
//             {/* 1.<Users name='Suraj Mourya (Fucntion)' location='Mumbai(Function)' /> */}
//             <UserClass name='Suraj Mourya (class)' location='Mumbai(class)' />

//         </div>
//     )
// }

export default About;