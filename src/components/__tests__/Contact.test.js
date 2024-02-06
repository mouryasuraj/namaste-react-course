import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Contact from "../Contact";

// describe is used to group together the test cases so it can perform efficiently and we can create nested describe also
describe('should test case of contact us component', () => {

    // afterAll(()=>{
    //     console.log('After All');
    // })
    // beforeAll(()=>{
    //     console.log('Before All');
    // })
    // afterEach(()=>{
    //     console.log('After Each');
    // })
    // beforeEach(()=>{
    //     console.log('Before Each');
    // })

    test('should render the contact us components', () => {
        render(<Contact />)
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
    })

    it('should render button inside the contact us components', () => {
        render(<Contact />)
        const button = screen.getByRole('button')
        // const text = screen.getByText('Submit')  //test case will be pass
        // const text = screen.getByText('Suraj')  //test case will be fail
        expect(button).toBeInTheDocument()
    })
    it('should check the placeholder available in the contact component or not', () => {
        render(<Contact />)
        const placeHolder = screen.getByPlaceholderText('name')
        // console.log(placeHolder);
        expect(placeHolder).toBeInTheDocument()
    })

    test('should render the input tag in the contact component', () => {
        render(<Contact />)
        // const inputRender = screen.getAByRole('textbox') //This will expect that there is only one textbox or input box available
        // Querying
        const inputRender = screen.getAllByRole('textbox') //But In this, it will expect more than one text boxes are there inthe DOM
        // expect(inputRender).toBeInTheDocument()
        // console.log(inputRender); //It will given an array to two element which is a react element which is an object
        // expect(inputRender.length).toBeGreaterThan(2)
        expect(inputRender.length).not.toBeGreaterThan(2)
    })
})
