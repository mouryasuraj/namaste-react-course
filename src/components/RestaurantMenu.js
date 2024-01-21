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
    // console.log(itemCards[0].card);

    return (
        <div>
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')}</h3>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards.map((item) => {
                        return <li key={item.card.info.id}>{item.card.info.name} - @{(item.card.info.price) / 100}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;