
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu=()=>{


const {resId}=useParams();
const resInfo=useRestaurantMenu(resId)
const [showIndex,setShowIndex]=useState(0)

const dummy="dummy data";


// useEffect(()=>{
//   fetchMenu();
// },[]);

// const fetchMenu= async () =>{
//     const data= await fetch(MENU_API + resId );
    
//     const json= await data.json();
//     console.log("JSON",json);
    
//     setresInfo(json.data)
// };

if(resInfo === null){
    return <Shimmer/>
}
  const {name,cuisines,costForTwoMessage,avgRating}=resInfo?.cards[2]?.card?.card?.info; 

 //console.log(resInfo?.cards[2]?.card?.card?.info)

  const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card; 
  // const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log("itemcard",resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
 
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log("categories",categories)
   //console.log(itemCards) 
  return (
        <div className="text-center">
           
           <h1 className="px-2 mx-12 my-6 font-bold text-2xl">{name}</h1>
            <p className="font-bold text-lg mx-4 px-3">{cuisines.join(",")}-{costForTwoMessage}</p>
            <h3>{avgRating}</h3>
               {/* categories  accordion  */}
             <div className="text-center">
             {categories.map((category,index)=>(
              <RestaurantCategories key={category?.card?.card?.title} 
              data={category?.card?.card} //.card add if error
              showItems={index===showIndex ? true: false}
              setShowIndex={()=> setShowIndex(index)}
              dummy={dummy}
              />
              ))}

             </div>


            {/* <ul>
               {itemCards.map((item)=>(
                <li key={item.card.info.id}>{item.card.info.name}-{"Rs"}{item.card.info.price/100||item.card.info.defaultPrice/100}</li>
               ))

               }

            </ul> */}
        </div>
    ) 
}
export default RestaurantMenu;