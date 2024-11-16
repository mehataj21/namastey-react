ep 01
import React from "react";
import ReactDOM from "react-dom/client";
// const parent=React.createElement(
//         "div",
//         {id:"parent"},[
//        React.createElement(
//         "div",
//         {id:"child"},[
//         React.createElement("h1",{},"This is namaste react 🚀"),
//         React.createElement("P",{},"lorem"),
// ]),

// React.createElement(
//         "div",
//         {id:"child2"},[
//         React.createElement("h1",{}," h1tag"),
//         React.createElement("h2",{},"im h2 tag🎶"),
// ]),
// ]);

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

                                EP03 PART O4
 
 import React from "react";
import ReactDOM from "react-dom/client";
//! REACT ELEMENT
const heading=React.createElement("h1",{id:"heading"},"Namaste React🚀");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
//! jsx element
const heading1=(<h1 className="jsx">Namaste react using JSX(REACT ELEMENT)</h1>);
const root1=ReactDOM.createRoot(document.getElementById("jsx"));
root1.render(heading1);
//! REACT FUNCTIONAL COMPONENT
const Heading=() => {
    return <h1 className="fn">Namaste react FUNCTIONAL COMPONENT</h1>
};
const ro=ReactDOM.createRoot(document.getElementById("fc"));
ro.render(<Heading/>);
 
                PART 05 EP 03

//! example COMPONENT COMPOSITION WE CAN CALL COMPONENTS IN HREE WAYS
// const Title=function(){
//   return (
//     <h1>Namaste jsx✌️</h1>
// )};
// const Car=()=>(
// <h1>hello COMPONENT2🚀</h1>
// );
// const Head=()=>(
//   <div  id="container">
//     <Title></Title>
//     {Title()}
//     <Title/>
//     <Car/>
//     <h1>Namaste fn🤞</h1>
//   </div> 

// );
// const fn=ReactDOM.createRoot(document.getElementById("fc2"))
// fn.render(<Head/>);
//! PUTTING ELEMENT INSIDE COMPONENT
// const ele=<span>React Element</span>
// const title=(
  
//   <h2>{ele}
//   Namaste jsx</h2>
// );
// const Hello=()=>(
  
//   <h2>{title}
//     Namaste FUNCTIONAL COMPONENT</h2>
// );
// const fn1=ReactDOM.createRoot(document.getElementById("fc3"));
// fn1.render(<Hello/>);
//!component inside element
const Hello=()=>(
  
  <h2>
    Namaste FUNCTIONAL COMPONENT</h2>
);
const Title=()=>(
  
    
  <h2><Hello/>
  Namaste jsx
  
  </h2>
  
);
const fn1=ReactDOM.createRoot(document.getElementById("fc3"));
fn1.render(<Title/>);



