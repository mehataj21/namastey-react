const { default: Contact } = require("../Contact")
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"

describe("Contact us page TestCases", () => {

    it("should load contact us component",() => {
        render(<Contact/>)
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument()
    
        
    })
    test("should load contact us component",() => {
        render(<Contact/>)
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument()
    
        
    })
    test("should load contact us component",() => {
        render(<Contact/>)
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        expect(inputBoxes.length).toBe(2)
    
        
    })
})
