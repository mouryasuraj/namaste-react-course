import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from '../RestaurantMenu'
import MOCKDATA from '../Mocks/ResMenuList.json'
import '@testing-library/jest-dom'
import { Provider } from "react-redux"
import appStore from "../../Utils/appStore"
import Header from "../Header"
import Cart from "../Cart"
import { BrowserRouter } from "react-router-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCKDATA)
        }
    })
})

it('should render RestaurantMenu component', async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        )
    })

    const name = screen.getByText('Season Special (5)');
    fireEvent.click(name)

    const items = screen.getAllByTestId('items')
    expect(items.length).toBe(5)

    const cartItemBefore = screen.getByText('Cart(0 items)')
    expect(cartItemBefore).toBeInTheDocument()

    const addBtns = screen.getAllByRole('button', { name: 'ADD' })
    fireEvent.click(addBtns[0])

    // const cartItemAfter = screen.getByText('Cart(1 items)')

    // expect(cartItemAfter).toBeInTheDocument()
    fireEvent.click(addBtns[1])
    // const cartItemAfter = screen.getByText('Cart(2 items)')
    // expect(cartItemAfter).toBeInTheDocument()
    fireEvent.click(addBtns[2])
    const cartItemAfter = screen.getByText('Cart(3 items)')
    expect(cartItemAfter).toBeInTheDocument()

    expect(screen.getAllByTestId('items').length).toBe(8)

    const clearCart = screen.getByRole('button', { name: 'Clear Cart' })
    fireEvent.click(clearCart)

    expect(screen.getAllByTestId('items').length).toBe(5)
    expect(screen.getByText('Your cart is empty. Please add items')).toBeInTheDocument()

})