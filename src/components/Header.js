import {LOGO_URL} from "../utils/constants";
import {useState} from "react"; 
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>
{
    const [btnNameReact, setBtnNameReact]=useState("Login");
    const onlineStatus=useOnlineStatus();
    //const cart
    return (
        <div className="flex justify-between bg-green-50 shadow-lg m-2">
        <div className="logo-container">
        <img className="w-20" src={LOGO_URL}/>
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4 font-bold">
                    Online Status:{onlineStatus ? "🟢" : "🔴"}
                </li>
                <li className="px-4 font-bold hover:bg-orange-500 rounded-full" >
                <Link to=""> Home 🏠</Link>
                </li>
                <li className="px-4 font-bold hover:bg-orange-500 rounded-full">  
                <Link to="/about">About Us ℹ️</Link>
                </li>
                {/* <li className="px-4 font-bold hover:bg-orange-500 rounded-full">
                    <Link to="/contact"> Contact Us 📱</Link>
                </li> */}
                {/* <li className="px-4 font-bold hover:bg-orange-500 rounded-full">
                <Link to="/grocery">Grocery 🍞</Link>
                </li> */}
                {/* <li className="px-4 font-bold hover:bg-orange-500 rounded-full">Cart(0)🛒 </li> */}
                <button
                className="font-bold hover:bg-orange-500 rounded-full"
                onClick={()=>{

                 btnNameReact=="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login");
                   }}
                >
              {btnNameReact}
                </button>
            </ul>
        </div>
        </div>
    );
};
export default Header; 
