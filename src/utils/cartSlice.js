import { createSlice, current } from "@reduxjs/toolkit"

const cartSlice= createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
         state.items.pop();   
        },
        //original state=["pizza"]
        clearCart:(state)=>{
            console.log(current(state)) // to see items
            state.items.length=0;// modifies the orginal state => original state = [] 
            //state=[]  => modifies local does not show any action
              //return  []  //=> valid this new [] will be replaced inside original Stete
        },
    }
})

export const{addItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;