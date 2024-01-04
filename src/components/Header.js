import { useState } from "react";
import { LOGO_URL } from "../Utils/constant";

const Header = () => {

    const [logIn, setLogin] = useState(true)

    // Handle Login Button
    const handleLoginBtn = ()=>{
        setLogin(!logIn)
    }
    console.log("Header render");


    return (
        <div className="header">
            {/* Logo */}
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="" />
            </div>
            {/* NavItems */}
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
                <button onClick={handleLoginBtn} className={`${logIn ? "login" : "sign-out"}`}>{logIn ? 'Log In' : 'Sign Out'}</button>
            </div>
        </div>
    )
}

export default Header;