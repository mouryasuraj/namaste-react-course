import { useEffect, useState } from "react";
import { LOGO_URL } from "../Utils/constant";
import {Link} from 'react-router-dom'
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {

    const [logIn, setLogin] = useState(true)

    // Handle Login Button
    const handleLoginBtn = ()=>{
        setLogin(!logIn)
    }
    // console.log("Header render");

    useEffect(()=>{
        // console.log('useEffect called');
    },[logIn])

    const onlineStatus = useOnlineStatus();


    return (
        <div className="header">
            {/* Logo */}
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="" />
            </div>
            {/* NavItems */}
            <div className="nav-items">
                <ul>

                    <li>Internet Status: {onlineStatus ? '✅' : '🔴'}</li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/grocery'>Grocery</Link></li>
                    <li>Cart</li>
                </ul>
                <button onClick={handleLoginBtn} className={`${logIn ? "login" : "sign-out"}`}>{logIn ? 'Log In' : 'Sign Out'}</button>
            </div>
        </div>
    )
}

export default Header;