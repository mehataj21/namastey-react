import { fireEvent, render,screen } from "@testing-library/react"
import {Provider} from "react-redux"
import Header from "../Header"
import foodStore from "../../utils/foodStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
//!ep.13 part 06
it("should load header component with a login button",() => {
  render(
  <BrowserRouter>
     <Provider store={foodStore}>
        <Header/>
     </Provider>
  </BrowserRouter>
    );
    const loginButton = screen.getByRole("button",{name:"login"});
   //const loginButton = screen.getByText("login")
    expect(loginButton).toBeInTheDocument();
})
it("should render Header component cart items as 0 ",() => {
    render(
    <BrowserRouter>
       <Provider store={foodStore}>
          <Header/>
       </Provider>
    </BrowserRouter>
      );
       const cartItem = screen.getByText("Cart-(0-items)");
    //   const cartItem = screen.getByText(/Cart/);//REJEX NEED NOT TO WITE EXACCT TEXT
     //const loginButton = screen.getByText("login")
      expect(cartItem).toBeInTheDocument();
  })
  it("should render Header component cart items as 0 ",() => {
    render(
    <BrowserRouter>
       <Provider store={foodStore}>
          <Header/>
       </Provider>
    </BrowserRouter>
      );
       const cartItem = screen.getByText(/Cart/);
    //   const cartItem = screen.getByText(/Cart/);//REJEX NEED NOT TO WITE EXACCT TEXT
     //const loginButton = screen.getByText("login")
      expect(cartItem).toBeInTheDocument();
  })
  it("should CHANGE login to logout on click",() => {
    render(
    <BrowserRouter>
       <Provider store={foodStore}>
          <Header/>
       </Provider>
    </BrowserRouter>
      );
       const loginButton = screen.getByRole("button",{name:"login"});
       
       fireEvent.click(loginButton);
         
       const logoutButton = screen.getByRole("button",{name:"logout"});
      
       expect(logoutButton).toBeInTheDocument();
  })
