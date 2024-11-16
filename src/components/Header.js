import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/contants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header=()=>{
    const [btnNameReact,setbinNameReact]=useState("login");

    const {loggedInUser}=useContext(UserContext)
    
    const onlineStatus=useOnlineStatus();
    
    useEffect(()=>{
        // console.log("useeffect called")
    })
    // console.log("header")

    

   const cartItems=useSelector((store) => store.cart.items)

    return(
        <div className="flex justify-between bg-blue-950 text-white shadow-lg mb-2  ">
            <div className="logo-container">
                <img 
                className="w-24 rounded-full" 
                src= {LOGO_URL}
                
                />
            </div>
            <div className="flex items-center justify-between">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status:{onlineStatus?"🟢":"🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4">
                        <Link to="/contact">Contact US</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
                      <Link to="/cart">Cart-({cartItems.length}-items)</Link>
                    </li>
                    <button className="login" onClick={()=>{
                        btnNameReact ==="login"?setbinNameReact("logout"):setbinNameReact("login")
                    }}>{btnNameReact}</button>
                    <li className="px-4">
                    {loggedInUser}
                   </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;