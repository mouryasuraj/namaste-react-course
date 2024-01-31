import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Utils/slices/cartSlice";
import ItemsList from "./ItemsList";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    // handleClearCart
    const handleClearCart = () =>{
        dispatch(clearCart())
    }

    return (
        <div className="cart-container">
            <div className="cart-header">
                <h2>Cart</h2>
                {cartItems.length !==0 && <button onClick={handleClearCart}>Clear Cart</button> }
            </div>
            {cartItems.length === 0 && <h1 className="empty-cart-msg">Your cart is empty. Please add items</h1>}
            <div>
                <ItemsList data={cartItems} />
            </div>
        </div>
    )
}
export default Cart;