import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/mockData";

const Body = () => {
    return (
        <div className="body">
            {/* Search Bar */}
            <div className="search"> Search</div>
            {/* Restuarant Title */}
            <h1 className="res-title">Restaurants</h1>
            {/* Restaurant Container */}
            <div className="restaurant-container">
                {
                    resList.map((resTaurantCard) => <RestaurantCard key={resTaurantCard.info.id} resData={resTaurantCard} />)
                }
            </div>
        </div>
    )
}


export default Body;