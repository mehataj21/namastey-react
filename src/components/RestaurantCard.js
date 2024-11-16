import { useContext } from "react";
import { CDN_URL } from "../utils/contants";
import UserContext from "../utils/UserContext";

const RestaurantCard=(props)=>{
    const {resData}=props;

    // console.log("resData",resData)
    const {loggedInUser}=useContext(UserContext)
    
    const {
      cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime
    }=resData?.info;
    
    return(
      
      <div data-testid="resCard"
       className="m-4 p-2 w-[250px]  rounded-md bg-gray-100 hover:bg-gray-200 hover:border border-solid border-black">

        <img 
        className="rest-logo rounded-lg"
         src={CDN_URL + resData.info.cloudinaryImageId}
         alt={resData.info.name}/>

        <h3 className="font-bold py-3 text-xl">{name}</h3>
        <h4 className="font-extralight"><i>{cuisines.join(",")}</i></h4>
        <h4 className="border border-solid border-black w-[50px] bg-green-500">
        <i className="fa-solid fa-star" style={{color:""}}></i>
            
        {avgRating}</h4>
        <h4>{resData.info.costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime}mintues</h4>
        <h4>User:{loggedInUser}</h4>
        
      </div>
      
    )
    console.log(resData.info.deliveryTime)
  }
    //! HOC-  input  =  restaurantcard  =>  restaurantcardpromoted

   export const withPromtedLabel=(RestaurantCard)=>{
    return(props)=>{
                  return(
        <div>
          <label className="absolute bg-black text-white m-4 p-4 rounded-lg">Promted</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
   }

  
export default RestaurantCard;