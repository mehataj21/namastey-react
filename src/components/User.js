import { useState } from "react";

const User=(props)=>{
    const {name,location}=props;

     const [count,setcount]=useState(0);
     const [count2,setcount2]=useState(1);

    return(
        <div className="user-card">
            <h1>count:{count}</h1>
            <button onClick={()=>{
                const countIn=count+1;
                setcount(countIn)
                setcount2(countIn)
            }
            }>count increase</button>
            <h1>count2:{count2}</h1>
              <h2>Name:{name}</h2>
              <h3>Location:{location}</h3>
              <h4>Contact:mehatajshaik870@gmail.com</h4>
        </div>
    )
}
export default User;