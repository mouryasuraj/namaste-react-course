import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../Utils/useRestaurantMenu';

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resMenuInfo = useRestaurantMenu(resId);

    // console.log(resMenuInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card);

    if (resMenuInfo === null) return <Shimmer />

    // MenuCoreData
    const { name, cuisines } = resMenuInfo?.data?.cards[0]?.card?.card?.info

    // List of menu
    const { itemCards } = resMenuInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
    console.log(resMenuInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    return (
        <div>
            <h1 className='bg-red-500'>{name}</h1>
            <h3 className=''>{cuisines.join(', ')}</h3>

        </div>
    )
}

export default RestaurantMenu;