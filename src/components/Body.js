import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/mockData";
import { useState } from "react";


const Body = () => {

    // Local State Variable--> Supowerful state variables
    const [listOfRestaurant, setListOfRestaurant] = useState(resList); //we have to give initial value and whatever we give or pass value as an argument it become the default value of that variable
    // We can also write like this
    // const arr = useState(resList);
    // const [listOfRestaurant, setListOfRestaurant] = arr;
    // const listOfRestaurant = arr[0];
    // const setListOfRestaurant = arr[1];



    // local normal variable
    // const listOfRestaurant = [];

    // Top rated
    const handleTopRated = ()=>{
        const filteredRes = resList.filter(res => res.info.avgRating > 4.3)
        setListOfRestaurant(filteredRes)
    }


    return (
        <div className="body">
            {/* Search Bar */}
            <div className="search">
                <button onClick={handleTopRated}>Top Rated Restaurant</button>
            </div>
            {/* Restuarant Title */}
            <h1 className="res-title">Restaurants</h1>
            {/* Restaurant Container */}
            <div className="restaurant-container">
                {
                    listOfRestaurant.map((resTaurantCard) => <RestaurantCard key={resTaurantCard.info.id} resData={resTaurantCard} />)
                }
            </div>
        </div>
    )
}


export default Body;