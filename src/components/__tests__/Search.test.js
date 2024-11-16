//render body component

import { fireEvent, render,screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData"
import { BrowserRouter } from "react-router-dom"
import { act } from "react";

import "@testing-library/jest-dom"
// import { act } from "react-dom/test-utils";
global.fetch=jest.fn(() => {
    return Promise.resolve({
        json:() => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})
test("Should render body component", async () => {

    await act(async () => render(
    <BrowserRouter>
       <Body/>
    </BrowserRouter>))
     
    const cardsbeforeSearch = screen.getAllByTestId("resCard")

    expect(Cards.length).toBe(11)

    // const searchBtn = screen.getByRole("button",{name:"search"})
    
    // const searchInput=screen.getByTestId("searchInput")
    
    // fireEvent.change(searchInput,{target : {value:"pizza"}})

    // fireEvent.click(searchBtn)

    //  // screen should load 4 res cards

    //  const cards = screen.getAllByTestId("resCard")

    //  expect(cards.length).toBe(1)
})