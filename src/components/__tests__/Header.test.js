import { fireEvent, render, screen } from "@testing-library/react"
import Header from '../Header'
import { Provider } from "react-redux"
import appStore from "../../Utils/appStore"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom'


it('should check whether our cart item is 0 or not', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText('Cart(0 items)')
    // const cartItems = screen.getByText(/cart/) //we can also use regex to test the text present in the document or not
    expect(cartItems).toBeInTheDocument()
})

it('should change the login button to logout button on click', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginBtn = screen.getByRole('button', { name: 'Log In' })
    fireEvent.click(loginBtn)
    const logoutBtn = screen.getByRole('button', {name:'Sign Out'})
    expect(logoutBtn).toBeInTheDocument()
})