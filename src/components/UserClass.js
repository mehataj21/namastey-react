import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            userInfo:{
                name:"dummy",
            location:"dummy",
            avatar_url:"#______#",
            }
        }
        
    }
    async componentDidMount(){
     const data= await fetch("https://api.github.com/users/akshaymarch7");
     const json=await data.json();
     
     this.setState({
        userInfo:json,
    });
    
     console.log(json)
    };
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    render(){
        
        //destructuring 
        const {name,location,avatar_url}=this.state.userInfo;

        
        return(

            
            <div className="user-card">
                
                 <img src={avatar_url}/>
                  <h2>Name:{name}</h2>
                  <h3>Location:{location}</h3>
                  <h4>Contact:mehatajshaik870@gmail.com</h4>
            </div>
        )
    }
}
export default UserClass;