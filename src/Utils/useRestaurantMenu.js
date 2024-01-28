import { useEffect, useState } from "react"
import { swiggyResMenuAPI } from "./constant"

const useRestaurantMenu = (resId) =>{

    const [resMenuInfo, setResMenuInfo] = useState(null);

    useEffect(()=>{
        fetchData()
    },[]);

    const fetchData = async () =>{
        try {
            const data = await fetch(swiggyResMenuAPI + resId);
            const json = await data.json();
            setResMenuInfo(json)
        } catch (error) {
            console.log(error);
        }
    };

    return resMenuInfo;
}

export default useRestaurantMenu;