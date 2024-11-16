import { GROCERY_IMG } from "../utils/contants";
import GroceryCard from "./GroceryCard";

const Grocery=()=>{
    return(
        <div>
            
            <img className="grocery-img" src={GROCERY_IMG} alt="img"/>
           {/* <GroceryCard/>  */}
        </div>
    )
}
export default Grocery;