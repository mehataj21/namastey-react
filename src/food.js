import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery"
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import foodStore from "./utils/foodStore";
import Cart from "./components/Cart";
// lazy loading
//on demand loading
//dynamic import

const Grocery=lazy(()=> import("./components/Grocery"))

const About=lazy(()=> import("./components/About"))

//authentication
const AppLayout=()=>{

const [userName,setUserName]=useState("")

useEffect(()=>{
    const data={
        name: "Shaik Mehataj",
    }
    setUserName(data.name);
},[])
return(
    <Provider store={foodStore}>
        <UserContext.Provider value={{loggedInUser: userName,setUserName}}>
        <div className="app">
            
            <Header/>
            <Outlet/>
            
            </div>
        </UserContext.Provider>
        </Provider>
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
            path:"/",
            element:<Body/>
            },
            {
                path:"/about",
                element:<Suspense fallback={<Shimmer/>}><About/></Suspense>,
                
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1><i>Loading</i></h1>}><Grocery/></Suspense>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
        ],
        errorElement:<Error/>
    },
    
])
const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>)