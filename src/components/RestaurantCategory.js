import { useState } from "react";
import ItemsList from "./ItemsList"

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    // const [showItems, setShowItems] = useState(false)   //If you want to show all items according to itself then use this, if you want to show items accoring to its parent then use Controlled component concept

    const handleShowItems = () => {
        setShowIndex();
    }

    return (
        <div className="res-menu-container">
            {/* res-menu-header */}
            <div className="res-menu-header" onClick={handleShowItems}>
                <h3>{data.title} ({data.itemCards.length})</h3>
                <span>{showItems ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</span>
            </div>
            {/* Res-menu-item-list */}
              {showItems && <ItemsList key={data?.itemCards?.card?.title} data={data?.itemCards} /> }
            <div>
            </div>
        </div>
    )
}

export default RestaurantCategory