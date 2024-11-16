import UserClass from "./UserClass"
import React from "react";
import { Component } from "react";
import UserContext from "../utils/UserContext";
// const About=()=>{
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>Food-Ordering.com is a standalone web application for hospitality businesses worldwide, which allows direct, efficient, fully owned and controlled sales and engagement with customers across different functions </h2>
//              <UserClass name={"shaik mehataj"} location={"Hyderabad"}/>
//         </div>
//     );
// };
// export default About;

class About extends Component{
    constructor(props){
        super(props)
        console.log("parent constructor")
    }
    componentDidMount(){
        console.log("parent did mount")
    }
    render() {
        console.log("parent render")

        return(
            <div>
                <h1>About</h1>
                <h3>online food delivery aap</h3>
                <h3><UserContext.Consumer>
                    {({loggedInUser})=><h1 className="font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer> </h3>
                <UserClass name={"shaik mehataj"} location={"Hyderabad"}/>
                {/* <UserClass name={"shaik mehataj"} location={"Hyderabad"}/> */}
            </div>
        )
    }
    
}
export default About;
