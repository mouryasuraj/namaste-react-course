import { fireEvent, render, screen } from '@testing-library/react'
import Body from "../Body"
import MOCKDATA from '../Mocks/RestaurantListData.json'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'
import { BrowserRouter, redirect } from 'react-router-dom'


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCKDATA)
        }
    })
})


it('Should render body component with search bar and test search bar', async () => {
    await act(async () => {
        return render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    })
    // Cards before search
    const cardsBeforeSearch = screen.getAllByTestId('resCard')
    expect(cardsBeforeSearch.length).toBe(9)

    const searchBtn = screen.getByRole('button', { name: 'Search' })
    const inputElm = screen.getByTestId('search-input')
    fireEvent.change(inputElm, { target: { value: 'pizza' } })
    fireEvent.click(searchBtn)

    // Cards After search
    const cardsAfterSearch = screen.getAllByTestId('resCard')
    expect(cardsAfterSearch.length).toBe(2)

})

it('should filter the top rated restaurants', async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    })

    const cardsBeforeTopRes = screen.getAllByTestId('resCard')
    expect(cardsBeforeTopRes.length).toBe(9)

    const topRatedRestaurant = screen.getByRole('button', { name: 'Top Rated Restaurant' })
    fireEvent.click(topRatedRestaurant)

    const cardsAfterTopRes = screen.getAllByTestId('resCard')
    console.log(cardsAfterTopRes);
    expect(cardsAfterTopRes.length).toBe(1)

})