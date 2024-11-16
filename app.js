
import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement("div", { className: "title" }, [
  React.createElement("h1", null, "header1"),
  React.createElement("h2", null, "header2"),
  React.createElement("h3", null, "header3")
]);

 const headerjsx=(
  <div className="title">
    <h1>header1</h1>
    <h2>header2</h2>
    <h3>header3</h3>
  </div>
 );
 const HeaderFc=()=>(
  <div className="title">
  <h1>header1</h1>
  <h2>header2</h2>
  <h3>header3</h3>
</div>

 );

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
 );file

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
