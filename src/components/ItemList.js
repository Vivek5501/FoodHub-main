// import { CDN_URL } from "../utils/constants";

// const ItemList=({items})=>{
//     return ( <div> 
//         {items.map((item)=>(
//         <div key={item.card.info.id} className="p-2 m-2 border-gray-250 border-b-2 text-left flex">
        
//         <div className="w-9/12">
//         <div className="py-2">
//         <span className="font-semibold">{item.card.info.name}</span>
//         <span className="font-semibold">-₹ {item.card.info.price 
//         ?item.card.info.price/100
//         :item.card.info.defaultPrice/100}
//         <p>Special Request</p>       
//                </span>
//         </div>
//         <p>{item.card.info.description}</p>
//         </div>
//         <div className="w-3/12 p-4">
//         <div className="absolute">
//         <button className="p-2 mx-16 rounded-lg bg-black text-white  shadow-lg m-auto"> 
//           {" "}
//          Add +</button>
//         </div>
//         <img src={CDN_URL+item.card.info.imageId} className="w-full"/>
//         </div>
//         </div>
//         ))}
//     </div>
//     );
// };
// export default ItemList;
///////////////////////////////////////////////////////////////////////////////////////////////////
// import { useState } from "react";
// import { CDN_URL } from "../utils/constants";

// const ItemList = ({ items }) => {
//   // State to store special requests for each item
//   const [specialRequests, setSpecialRequests] = useState({});

//   // Handler to update special request for an item
//   const handleSpecialRequestChange = (itemId, request) => {
//     setSpecialRequests((prevRequests) => ({
//       ...prevRequests,
//       [itemId]: request,
//     }));
//   };

//   return (
//     <div>
//       {items.map((item) => (
//         <div
//           key={item.card.info.id}
//           className="p-2 m-2 border-gray-250 border-b-2 text-left flex"
//         >
//           <div className="w-9/12">
//             <div className="py-2">
//               <span className="font-semibold">{item.card.info.name}</span>
//               <span className="font-semibold">
//                 - ₹{item.card.info.price
//                   ? item.card.info.price / 100
//                   : item.card.info.defaultPrice / 100}
//               </span>
//               <p>{item.card.info.description}</p>
//             </div>
//             <div>
//               <p className="font-semibold">Special Request</p>
//               <textarea
//                 value={specialRequests[item.card.info.id] || ""}
//                 onChange={(e) =>
//                   handleSpecialRequestChange(item.card.info.id, e.target.value)
//                 }
//                 placeholder="Add any special requests or notes..."
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//           </div>
//           <div className="w-3/12 p-4">
//             <div className="absolute">
//               <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg m-auto">
//                 Add +
//               </button>
//             </div>
//             <img
//               src={CDN_URL + item.card.info.imageId}
//               alt={item.card.info.name}
//               className="w-full"
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ItemList;
////////////////////////////////////////////////////////////////////////////////

import { useState, useEffect } from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  // State to store special requests for each item
  const [specialRequests, setSpecialRequests] = useState({});

  // Load special requests from local storage when the component mounts
  useEffect(() => {
    const savedRequests = JSON.parse(localStorage.getItem("specialRequests"));
    if (savedRequests) {
      setSpecialRequests(savedRequests);
    }
  }, []);

  // Handler to update special request for an item and save to local storage
  const handleSpecialRequestChange = (itemId, request) => {
    const updatedRequests = {
      ...specialRequests,
      [itemId]: request,
    };
    setSpecialRequests(updatedRequests);
    localStorage.setItem("specialRequests", JSON.stringify(updatedRequests));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-250 border-b-2 text-left flex"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-semibold">{item.card.info.name}</span>
              <span className="font-semibold">
                - ₹{item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p>{item.card.info.description}</p>
            </div>
            <div>
              <p className="font-semibold">Special Request</p>
              <textarea
                value={specialRequests[item.card.info.id] || ""}
                onChange={(e) =>
                  handleSpecialRequestChange(item.card.info.id, e.target.value)
                }
                placeholder="Add any special requests or notes..."
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg m-auto">
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
