const SearchBar = ({ state, dispatch }) => {
  const handleChangeSearch = (e) => {
    dispatch({ type: "CHANGE_FILTER", payload: e.target.value })
  }

  return (
    <div className="input-group mb-3">
      <input onChange={handleChangeSearch} type="text" className="form-control" placeholder="Tapez votre recherche" aria-label="Recipient's username" aria-describedby="button-addon2" />
    </div>
  )
}

export default SearchBar