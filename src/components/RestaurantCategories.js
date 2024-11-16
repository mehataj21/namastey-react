import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories=({data , showItems, setShowIndex , dummy})=>{

// const [showItems,setShowItems]=useState(false)

  const handleClick=()=>{
              setShowIndex()
          //  setShowItems(!showItems)
  }

    return(
        <div>
            
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 text-center">
             <div className="flex justify-between hover:cursor-pointer" onClick={handleClick}>
                <span className="font-bold">{data.title}({data.itemCards.length})</span>
                <span>⬇️</span>

                </div>
                {showItems && <ItemList items={data.itemCards} dummy={dummy}/>}
            </div>
         
            
        
            </div>
    )
}
export default RestaurantCategories;