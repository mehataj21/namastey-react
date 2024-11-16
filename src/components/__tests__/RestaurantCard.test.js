//! ep-13 part-07
import { render ,screen} from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import { Provider } from "react-redux";
import foodStore from "../../utils/foodStore";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/resCardMock.json"

import "@testing-library/jest-dom"

it("should render res card", () => {
    render(<BrowserRouter>
    <Provider store={foodStore}>
        <RestaurantCard resData={MOCK_DATA}/>
    </Provider>
    </BrowserRouter>)
   const  name = screen.getByText("Adil Hotel")

   //expect(name).to.equal("Hotel Sai Nath & Sai Restaurant")
   expect(name).toBeInTheDocument();
})
test("should render res card with promoted label",() => {
    //homework - test HOC : withPromtedLabel
})