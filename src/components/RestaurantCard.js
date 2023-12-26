import { CDN_URL } from "../Utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } = resData?.info


    return (
        <div className="restaurant-card">
            <img className="res-image" src={CDN_URL + cloudinaryImageId} alt="" />
            <h3 className="card-title">{name}</h3>
            <h4 className="cuisine">{cuisines.join(", ")}</h4>
            <div className="sub-details">
                <h4 className="rating">{avgRating}⭐</h4>
                <h4 className="eta">{sla.deliveryTime} MINS </h4>
            </div>
            <h4 className="price">{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;