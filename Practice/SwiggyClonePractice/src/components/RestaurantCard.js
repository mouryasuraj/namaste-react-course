import { resCardImgURL } from "../Utils/constant";

const RestaurantCard = (props) => {
    const {listOfRestaurant} = props;
    const {cloudinaryImageId, name, sla, cuisines, avgRating, costForTwo} = listOfRestaurant?.info;


    return (
        <div className="restaurant-card">
            <img src={resCardImgURL + cloudinaryImageId} alt="" />
            <h3 className="restaurant-name">{name}</h3>
            <h3 className="restaurant-cuisines">{cuisines.join(', ')}</h3>
            <div className="details flex-gap">
                <h3 className="rating">{avgRating}⭐</h3>
                <h3 className="eta">{sla.slaString}</h3>
            </div>
            <h3 className="price">{costForTwo}</h3>
        </div>
    )
}

export default RestaurantCard
