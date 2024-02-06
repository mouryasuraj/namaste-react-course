import VegIcon from './VegIcon'
import NonVegIcon from './NonVegIcon'
import { menuListImgURL } from '../Utils/constant'
import { useDispatch } from 'react-redux'
import { addItem } from '../Utils/slices/cartSlice'

const ItemsList = ({ data }) => {

    const dispatch = useDispatch()

    // handleAddItemtoCart
    const handleAddItemtoCart = (card) => {
        dispatch(addItem(card))
    }

    return (
        <>
            {data.map((card) => {
                const { name, price, defaultPrice, description, imageId, isVeg } = card?.card?.info
                return (
                    <div data-testid='items' className="res-dish-list">
                        <div className="left">
                            <div className="dish-details">
                                {isVeg === 1 ? <VegIcon /> : <NonVegIcon />}
                                <h3 className="dish-title">
                                    {name}
                                </h3>
                                <p className="dish-price"><i className="fa-solid fa-indian-rupee-sign"></i> {(defaultPrice || price) / 100}</p>
                                <p className="dish-description">{description}</p>
                            </div>
                        </div>
                        <div className="right">
                            <div className="dish-img-container">
                                {imageId && <img src={menuListImgURL + imageId} alt="Item Image" />}
                                <button onClick={()=> handleAddItemtoCart(card)}>ADD</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default ItemsList