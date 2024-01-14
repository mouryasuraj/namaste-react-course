import { useState } from "react"

const SearchBox = (props) => {
  const { listOfRestaurant, setListOfRestaurant, listOfRes } = props;

  const [searchTerm, setSearchTerm] = useState('')

  const handleInput = (e) => {
    setSearchTerm(e.target.value)
  }

  const handlFormSubmit = (e) => {
    e.preventDefault();
    const filteredSearch = listOfRestaurant.filter(card => card.info.name.toLowerCase().includes(searchTerm.toLowerCase()))
    if (searchTerm.length === 0) {
      setListOfRestaurant(listOfRes)
    } else {
      setListOfRestaurant(filteredSearch)
    }
  }


  return (
    <form onSubmit={handlFormSubmit} className="search-container flex-gap">
      <input className="search-input" type="text" value={searchTerm} onChange={handleInput} placeholder="Search for restaurant....." />
      <button>Search</button>
    </form>
  )
}

export default SearchBox
