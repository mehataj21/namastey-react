// const heading=React.createElement("h1",{id:"heading"},"hello word from react");
//  const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
import React from "react";
import ReactDOM from "react-dom/client";
//! REACT ELEMENT
// const heading=React.createElement("h1",{id:"heading"},"Namaste React🚀");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// //! jsx element
// const heading1=(<h1 className="jsx">Namaste react using JSX(REACT ELEMENT)</h1>);
// const root1=ReactDOM.createRoot(document.getElementById("jsx"));
// root1.render(heading1);
// //! REACT FUNCTIONAL COMPONENT
// const Heading=() => {
//     return <h1 className="fn">Namaste react FUNCTIONAL COMPONENT</h1>
// };
// const ro=ReactDOM.createRoot(document.getElementById("fc"));
// ro.render(<Heading/>);
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
// const Hello=()=>(
  
//   <h2>
//     Namaste FUNCTIONAL COMPONENT👌</h2>
// );
// const Title=()=>(
  
    
//   <h2><Hello/>
//   Namaste jsx🚀
  
//   </h2>
  
// );
// const fn1=ReactDOM.createRoot(document.getElementById("fc3"));
// fn1.render(<Title/>);
// //! assignment 3

const header = React.createElement("div", { className: "title" }, [
  React.createElement("h1", null, "header1"),
  React.createElement("h2", null, "header2"),
  React.createElement("h3", null, "header3")
]);

// const root = ReactDOM.createRoot(document.querySelector(".title"));
// root.render(header);
 //! jsx
 const headerjsx=(
  <div className="title">
    <h1>header1</h1>
    <h2>header2</h2>
    <h3>header3</h3>
  </div>
 );
//  const root=ReactDOM.createRoot(document.getElementById("title"));
//  root.render(headerjsx)
 //! functional component
 const HeaderFc=()=>(
  <div className="title">
  <h1>header1</h1>
  <h2>header2</h2>
  <h3>header3</h3>
</div>

 );
//  const root=ReactDOM.createRoot(document.getElementById("title"));
//  root.render(<HeaderFc/>)
 //! component composition
 const TitleComponent= function(){
  return(
  <h1>one</h1>
 )};
 const TitleComponent1=()=>(
  <div id="container">
    <TitleComponent/>
    <TitleComponent></TitleComponent>

  <h1>TWO</h1>
  </div>
 );
//  const root=ReactDOM.createRoot(document.getElementById("title"));
//  root.render(<TitleComponent1/>);
 //!header with logo
//  import React from 'react';
// import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MyLogo🔍</div>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
      <div className="user-icon">👤</div>
    </header>
  );
};

const root=ReactDOM.createRoot(document.getElementById("title"));
root.render(<Header/>)
