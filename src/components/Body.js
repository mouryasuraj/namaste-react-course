import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/mockData";
import { useEffect, useState } from "react";


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


    // // useEffect
    // useEffect(()=>{
    //     fetchData();
    // },[])

    // // FetchData function
    // const fetchData = async () =>{
    //     const fetched = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=19.0544695&lng=72.9364825"); //This api is not working.
    //     const jsonData = await fetched.json();
    //     console.log(jsonData);
    //     // setListOfRestaurant(jsonData?.data?.card) //YOu can do this if your api is working properly. We can use optional chaining mechanism to avoid error.
    // }




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