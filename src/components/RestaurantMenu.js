import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../Utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';

const RestaurantMenu = () => {


    const { resId } = useParams();
    // State for resmenu index
    const [showIndex, setShowIndex] = useState(null)

    const resMenuInfo = useRestaurantMenu(resId);

    // console.log(resMenuInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card);

    if (resMenuInfo === null) return <Shimmer />

    // Categories
    const categories = resMenuInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(categories);


    return (
        <div>
            {
                categories.map((cat, index) => (

                    <RestaurantCategory key={index} data={cat?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(showIndex === index ? null : index)} />  //All restaurantCateory maintaining their own state
                ))
            }
        </div>
    )
}

export default RestaurantMenu;