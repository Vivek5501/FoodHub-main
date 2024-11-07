import RastaurantCard from "./RastaurantCard.js";
import {useState,useEffect} from "react"; 
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
const Body=()=>
{
    const [listOfRestaurants,setListOfRestaurant]=useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);
    const [searchText,setSearchText]=useState("");
    
    console.log(listOfRestaurants);
   useEffect(()=>
    {
      fetchData();
    },[]);

    const fetchData=async()=>
    {
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    console.log(json);
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus=useOnlineStatus();
    if(onlineStatus==false) 
    {
        return (
            <h1> You are offline...Check your internet connection</h1>
        )
    }
    
    return listOfRestaurants.length==0 ?(<Shimmer/>):
    (
        <div className="body">
        <div className="flex">
            <div className="search m-4 p-4 ">
             <input type="text" className="border border-solid border-black" value={searchText} 
             onChange={(e)=>{
                setSearchText(e.target.value);
                }}/>
             <button className="px-4 py-1 bg-green-100 m-4 rounded-lg hover:bg-green-500" 
             onClick={()=>{
            const filteredRestaurant= listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurant(filteredRestaurant);
             }}
             >
                 Search </button>
            </div>
        <div className="search m-4 p-4 flex items-center ">
        <button className="px-4 py-1 bg-gray-100 rounded-lg hover:bg-gray-400" onClick={()=>
        {
            const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4.3);
            setFilteredRestaurant(filteredList);
        }
        }> Top Rated Restaurant</button>
        </div>
        </div>

        <div className="flex flex-wrap">
        { filteredRestaurant.map((restaurant)=>(
        <Link 
        key={restaurant.info.id}
        to={"/restaurants/"+restaurant.info.id}
        >
            <RastaurantCard  resData={restaurant}/></Link>
        ))}
        </div>
         </div>
    );
};
export default Body;