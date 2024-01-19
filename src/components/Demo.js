import { Component } from "react";

class Demo extends Component{

    constructor(props){
        super(props)
        console.log("Demo Constructor");
    }
    componentDidMount(){
        console.log("Demo Did MOunt");
    }

    render(){
        console.log("Demo Render");
        return (
            <h1>Demo</h1>
        )
    }
}

export default Demo;