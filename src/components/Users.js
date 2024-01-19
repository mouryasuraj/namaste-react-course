import { useEffect, useState } from "react";

const Users = ({ name, location }) => {
    const [count] = useState(0);
    const [count1] = useState(2);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("hello");
        }, 1000);
        console.log("Useffect called");
        // here return will be call before unmounting the component.
        return ()=>{
            clearInterval(timer)
            console.log('component unmount');
        }
    },[])
    console.log("COmponent");

    return (
        <div className="user-card">
            <h1>Count: {count}, {count1}</h1>
            <h3>Name: {name}</h3>
            <h3>Contact: @xyzgmail.com</h3>
            <h3>github: mouryasuraj</h3>
            <h3>Location: {location}</h3>
        </div>
    )
}

export default Users;