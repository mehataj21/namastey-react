import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/contants";
import { addItem } from "../utils/cartSlice";

const ItemList=({items , dummy})=>{
    // console.log(dummy)
    


const dispatch=useDispatch() ;

const handleAddItem=(item)=>{
    //dispatch an actio
    dispatch(addItem(item))
    
}
return(
        <div>
            {(items||[]).map((item)=>(
            <div 
            key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
            
        <div className="w-6/12">
        <div className="py-2">
            <span className="font-bold">{item.card.info.name}</span>
            <p>- ₹{item.card.info.price/100}</p>
        </div>
             <p className="text-xs">{item.card.info.description}</p>
        </div>
        <div className="w-3/12 p-4">
            <div className="absolute"> 
                <button 
                className="absolute  mx-2 bg-white" 
                onClick={()=>handleAddItem(item)}
                >ADD</button>
                </div> 
                <img src={CDN_URL + item.card.info.imageId} className="w-full"/>
                
        </div>
        </div>
        ))}
        </div>
    )
}
export default ItemList;