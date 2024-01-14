

const FilterBtns = (props) => {

  const {listOfRestaurant, setListOfRestaurant, listOfRes, topRated, setTopRated, under200, setUnder200} = props;

  // Function to handle topRatedRes
  const handleTopRatedRes = () =>{
    setTopRated(!topRated)
    const filteredTopRes = listOfRestaurant.filter(card => card.info.avgRating > 4.5)
    if(!topRated){
      setListOfRestaurant(filteredTopRes)
    }else{
      setListOfRestaurant(listOfRes)
    }
  }


  // Function to handle under200
  const handleUnder200 = () =>{
    setUnder200(!under200)
    const filteredUnder200 = listOfRestaurant.filter(card => card.info.costForTwo.slice(1,4) < 200)
    if(!under200){
      setListOfRestaurant(filteredUnder200)
    }else{
      setListOfRestaurant(listOfRes)
    }
  }

  return (
    <div className="filter-container flex-gap">
      <div className="filter-btns flex">
        <input type="checkbox" id="top-rated" checked={topRated} onChange={handleTopRatedRes} />
        <label htmlFor="top-rated">Top Rated</label>
      </div>
      <div className="filter-btns flex">
        <input type="checkbox" id="under-200" checked={under200} onChange={handleUnder200} />
        <label htmlFor="under-200">Under 200</label>
      </div>
    </div>
  )
}

export default FilterBtns
