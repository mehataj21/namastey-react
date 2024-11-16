import RestaurantCard,{withPromtedLabel} from "./RestaurantCard";
import { useState,useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body=()=>{
    const [ListOfRestaurant,setListOfRestaurant]=useState([]);
    const [filteredRestaurant,setfillteredRestaurant]=useState([])
    const [searchText,setsearchText]=useState("")
       console.log(ListOfRestaurant)
    
    const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);
    
    
       const onlineStatus = useOnlineStatus();
    
    const {loggedInUser, setUserName}=useContext(UserContext)   

    useEffect(()=>{
      fetchData();
    },[])
    const fetchData= async ()=>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json=await data.json();
        // console.log(json)
        // console.log("Full JSON Response: ", json)
        // console.log("Extracted Restaurants: ", restaurants)
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants|| []);
        setfillteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants||[]);
    };
    // console.log("body render")
 if(!ListOfRestaurant||ListOfRestaurant.length===0){
   return <Shimmer/>;
     }
// console.log("ListOfRestaurant", ListOfRestaurant)
    


if(onlineStatus===false){
    return(
        <div>
            <h1><i>Looks like your offline!!</i></h1>
            <h3><i>Please check your inretnet connection</i></h3>
        </div>
    )
}


return (
        <div className="body">
           
            <div className="filter flex">
            <div className="search m-4 p-4">
                <input 
                type="text"
                data-testid="searchInput"
                 className="border border-solid border-black w-80 h-10 rounded-l-full" value={searchText} onChange={(e)=>{
                    setsearchText(e.target.value)
                }}/>
                <button className="px-4 py-0.05 bg-red-500  h-10 rounded-r-full"
                onClick={()=>{
                    const filteredRestaurant=ListOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                    console.log(filteredRestaurant)
                    setfillteredRestaurant(filteredRestaurant)
                }}
                >search</button>
            </div>
            <div className="search m-4 p-4 flex items-center ">
                <button className="filter-btn px-8 py-0 bg-orange-400 rounded-lg" onClick={()=>{
                    const filteredList=ListOfRestaurant.filter((res)=>res.info.avgRating> 4.3)
                    setfillteredRestaurant(filteredList);
                    // setListOfRestaurant(filteredList)
                    // console.log(ListOfRestaurant);
                }}>Top Rated Restaurant</button>
            </div>
            <div>
                <label>UserName:</label>
                <input className="border border-solid border-blue-950 p-2"
                 value={loggedInUser} 
                 onChange={(e)=>setUserName(e.target.value)}/>
            </div>
            
            </div>
            <div className="rest-container flex flex-wrap">
             {filteredRestaurant.map((restaurant) => (
                <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                    {//!  (HOC)IF RES IS PROMOTED THEN ADD A PROMOTED LABEL TO IT
                    restaurant.info.promoted? <RestaurantCardPromoted resData={restaurant}/>:
                    <RestaurantCard  resData={restaurant}/>}</Link>
             ))};
            </div>

           

        </div>
    )
}
export default Body; 