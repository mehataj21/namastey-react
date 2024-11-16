
import { useEffect, useState } from "react"

const GroceryCard=(props)=>{
     const {product_info}=props;
     const {des,pricing}=product_info?.products;
    const [GroceryList, setGroceryList]=useState(null)

    useEffect(()=>{
           fetchCard()
    },[])
      
    const fetchCard=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json()
        console.log("List",json)

        setGroceryList(json.data?.card[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants||[])
        return GroceryList;
    }
    

    return(
<div>
    <img src=""/>
    <h2>{desc}</h2>
    <h3>{pricing}</h3>
</div>
    )
}
export default GroceryCard;