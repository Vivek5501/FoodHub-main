import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu=()=>
{
    const{resId}=useParams();
    const data=useRestaurantMenu(resId); 
   
     if(data==null) return <Shimmer/>
     const{name,cuisines,costForTwoMessage}=data?.cards[2]?.card?.card?.info;
     const{itemCards}=data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   console.log(data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

   const categories=data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
 );


    return (
        <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold"> 
        {cuisines.join(",")} - {costForTwoMessage}
        </p>
        {categories.map((category)=>(
            <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card}/>
    ))}
        </div>
    );
};
export default RestaurantMenu;