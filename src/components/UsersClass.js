import { Component } from "react";
// import Demo from "./Demo";

class UsersClass extends Component {
    constructor(props) {
        super(props)
        // This is a way to create state variables
        this.state = {
            userData: {
                name: 'Dummy',
                location: 'Dummy',
                avatar_url: 'htt:fakeimage.com',
                twitter_username: 'dummy'
            }
        }
        console.log(this.props.name + "Child constructor");
    }
    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/mouryasuraj')
        const json = await data.json();
        this.setState({
            userData: json
        })
        // It will call again and again. If you visit some other component and come again to this component then it will create another setInterval.This is a disadavantage of SPA
        this.timer = setInterval(() => {
            console.log("Hello");
        }, 1000);
    }
componentWillUnmount(){
    clearInterval(this.timer)
}
    render() {

        console.log(this.props.name + "Child render");
        const { name, location, twitter_username, avatar_url } = this.state.userData;


        return (
            <div className="user-card">
                <img src={avatar_url} alt="" />
                <h3>Name: {name}</h3>
                <h3>Contact: {twitter_username}</h3>
                <h3>github: mouryasuraj</h3>
                <h3>Location: {location}</h3>
                {/* <Demo /> */}
            </div>
        )
    }
}

export default UsersClass;