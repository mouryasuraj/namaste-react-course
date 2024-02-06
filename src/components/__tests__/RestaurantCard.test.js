import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import { withPromotedLabel } from "../RestaurantCard"
import MOCK_DATA from '../Mocks/ResCardMock.json'
import MOCK_DATA_LABEL from '../Mocks/ResCardMockWithLabel.json'
import '@testing-library/jest-dom'

it('should render restaurant CArd with props data', () => {
    render(<RestaurantCard resData={MOCK_DATA} />)

    const resCardName = screen.getByText('Chinese Wok')
    expect(resCardName).toBeInTheDocument()
})

it('should render restaurant card with label "promoted"', () => {
    const RestaurantCardWithPromoted = withPromotedLabel(RestaurantCard)
    render(<RestaurantCardWithPromoted resData={MOCK_DATA_LABEL} />)

    const promotedLableName = screen.getByText('Bakingo-Cakes & Desserts')
    expect(promotedLableName).toBeInTheDocument()
})