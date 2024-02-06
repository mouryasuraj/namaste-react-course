import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../Utils/constant";
import { Link } from 'react-router-dom'
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [logIn, setLogin] = useState(true)

    // UserContext
    const { loggedInUser } = useContext(UserContext)  //It gives you a data of object

    // Subcribing to the store of item using selector 
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);

    // Handle Login Button
    const handleLoginBtn = () => {
        setLogin(!logIn)
    }
    // console.log("Header render");

    useEffect(() => {
        // console.log('useEffect called');
    }, [logIn])

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
                    <li><Link to='/cart'>{`Cart(${cartItems.length} items)`}</Link></li>
                    <li>{loggedInUser}</li>
                </ul>
                <button onClick={handleLoginBtn} className={`${logIn ? "login" : "sign-out"}`}>{logIn ? 'Log In' : 'Sign Out'}</button>
            </div>
        </div>
    )
}

export default Header;