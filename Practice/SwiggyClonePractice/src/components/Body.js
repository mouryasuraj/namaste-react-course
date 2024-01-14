import FilterBtns from "./FilterBtns"
import SearchBox from "./SearchBox"
import { useEffect, useState } from "react"
import { swiggyAPI } from "../Utils/constant"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"

const Body = () => {

  // ListOfRestaurant state variable
  const [listOfRestaurant, setListOfRestaurant] = useState([])
  const [listOfRes, setListOfRes] = useState([])

  // FilterBTns state variable
  const [topRated, setTopRated] = useState(false)
  const [under200, setUnder200] = useState(false)


  // UseEffect to fetch the swiggy api
  useEffect(() => {

    fetchData()
  }, [])

  // function to fetchData from swiggy api
  const fetchData = async () => {
    const fetchedData = await fetch(swiggyAPI);
    const JSONData = await fetchedData.json();
    console.log(JSONData?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurant(JSONData?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    setListOfRes(JSONData?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
  }


  return (
    <div className="body">
      <SearchBox listOfRestaurant={listOfRestaurant}  setListOfRestaurant={setListOfRestaurant} listOfRes={listOfRes}  />
      <h1 className="restaurant-title">Restaurants</h1>
      <FilterBtns
        listOfRestaurant={listOfRestaurant}
        topRated={topRated}
        setListOfRestaurant={setListOfRestaurant}
        listOfRes={listOfRes}
        setTopRated={setTopRated}
        under200={under200}
        setUnder200={setUnder200} />
      <div className="restaurant-container">
        {
          listOfRestaurant.length === 0 ? <Shimmer /> :
            listOfRestaurant.map((card) => (
              <RestaurantCard key={card.info.id} listOfRestaurant={card} />
            )) 
        }

      </div>
    </div>
  )
}

export default Body
