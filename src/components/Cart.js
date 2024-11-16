import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart= () => {

const cartItems = useSelector((store) => store.cart.items)
console.log(cartItems)

const dispatch = useDispatch();

const handelClearCart = () => {
    dispatch(clearCart());
};

    return (
    <div className="text-center m-4 p-4">
         <h1 className="font-bold"><i>Cart</i></h1>
         <div className="w-6/12 m-auto">
         <button className="p-2 m-2 bg-black text-white"
         onClick={handelClearCart}
         >Clear Cart</button>
         {cartItems.length===0 && 
         <h1 className="font-bold text-3xl">
            <i>Cart is empty Add Items to the cart!!</i></h1>}
            {/* <button className="p-2 m-2 bg-black text-white"
         onClick={()=>handleRemoveItem(item)}
         >Remove Item</button>    */}
            <ItemList items={cartItems} /> 
         </div>
         </div>
    )
}
export default Cart;