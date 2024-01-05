import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

    // Local State Variable--> Supowerful state variables
    const [listOfRestaurant, setListOfRestaurant] = useState([]); //we have to give initial value and whatever we give or pass value as an argument it become the default value of that variable
    // We can also write like this
    // const arr = useState(resList);
    // const [listOfRestaurant, setListOfRestaurant] = arr;
    // const listOfRestaurant = arr[0];
    // const setListOfRestaurant = arr[1];

    const [filteredRes, setFilteredRes] = useState([]);

    // state varaible for search bar
    const [searchText, setSearchText] = useState('')


    // local normal variable
    // const listOfRestaurant = [];

    // Top rated
    const handleTopRated = () => {
        const filteredRes = listOfRestaurant.filter(res => res.info.avgRating > 4.3)
        setFilteredRes(filteredRes)
    }


    // useEffect
    useEffect(() => {
        fetchData();
    }, [])

    // FetchData function for an api
    // const fetchData = async () =>{
    //     const fetched = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=19.0544695&lng=72.9364825"); //This api is not working.
    //     const jsonData = await fetched.json();
    //     console.log(jsonData);
    //     // setListOfRestaurant(jsonData?.data?.card) //YOu can do this if your api is working properly. We can use optional chaining mechanism to avoid error.
    // }
    console.log("After useEffect");

    // fetchData function to who hardcode data in the UI
    const fetchData = () => {
        setTimeout(() => {
            setListOfRestaurant(resList)
            setFilteredRes(resList)
        }, 1000);
    }
    
    
    // Handle Input 
    const handleInput = (e) => {
        setSearchText(e.target.value)
    }
    // Handle Search BTN
    const handleSearchBtn = (e) => {
        e.preventDefault()
        const filteredRes = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilteredRes(filteredRes)
    }


    // If the length of restaurant is 0 then show shimmer instead of restaurant cards
    // if (listOfRestaurant.length === 0) {
    //     return <Shimmer />
    // }

    return listOfRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            {/* Search Bar */}
            <div className="search">
                <button className="top-rating-res" onClick={handleTopRated}>Top Rated Restaurant</button>
                <form onSubmit={handleSearchBtn} className="search-bar">
                    <input type="text" placeholder="Search fro restaurant...." value={searchText} onChange={handleInput} />
                    <button className="search-btn">Search</button>
                </form>
            </div>
            {/* Restuarant Title */}
            <h1 className="res-title">Restaurants</h1>
            {/* Restaurant Container */}
            <div className="restaurant-container">
                {
                    filteredRes.length === 0 
                    ? <h1>No results found.</h1> 
                    : filteredRes.map((resTaurantCard) => <RestaurantCard key={resTaurantCard.info.id} resData={resTaurantCard} />)
                }
            </div>
        </div>

    )
}


export default Body;