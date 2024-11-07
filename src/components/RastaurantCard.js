import {CDN_URL} from "../utils/constants";
const RastaurantCard=(props)=>
{
    const {resData}=props;
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,slaString}=resData?.info;
    return (
        <div className="m-4 p-4 w-[270px] h-[515px] bg-gray-50 hover:bg-green-100"  >
        <img className="rounded-lg h-[270px] w-[250px]"
        alt="res-logo"
        src={CDN_URL+cloudinaryImageId}/> 
    
       <h3 className="font-bold py-4 text-lg"> {name}</h3>
       <div className="cousine">
       <h4 className="variety"> {cuisines.join(","+" ")} </h4>
       </div>
       <h4>{avgRating}</h4>
       <h4>{costForTwo}</h4>
       <h4>{resData.info.sla.slaString}</h4>
        </div>
    );
}
export default RastaurantCard;
