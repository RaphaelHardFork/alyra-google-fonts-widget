const WidgetSide = ({ filter, setFilter, text, setText, size, setSize, dispatch, favorite }) => {
  const handleChangeFilter = (e) => {
    if (e.target.value !== "favorite") {
      dispatch({ type: "CHANGE_FETCH", payload: e.target.value })
    } else {
      dispatch({ type: "CHANGE_FETCH", payload: e.target.value })   // favorite : []
    }
    setFilter(document.getElementById(e.target.value).textContent)
  }

  const handleChangeText = (e) => {
    setText(e.target.value)
  }

  const handleChangeSize = (e) => {
    setSize(e.target.value)
  }

  return <aside className="col-lg-3 mb-4">
    {/*SELECT*/}
    <label className="fw-bold mb-1" htmlFor="font-select">Afficher des polices</label>
    <select defaultValue={filter} onChange={handleChangeFilter} className="form-select mb-4" id="font-select" aria-label="Default select example">
      <option id="alpha" value="alpha">Par ordre alphabétique</option>
      <option id="date" value="date">Les plus récentes</option>
      <option id="popularity" value="popularity">Les plus populaires</option>
      <option id="trending" value="trending">Top 10 trending</option>
      <option id="style" value="style">Les plus complètes</option>
      <option id="favorite" value="favorite">Mes favoris</option>
    </select>

    {/*TEXT AREA*/}
    <label className="fw-bold mb-1" htmlFor="floatingTextarea2">Tapez votre text</label>
    <textarea onChange={handleChangeText} defaultValue={text} className="form-control mb-4" placeholder="Tapez votre texte..." id="floatingTextarea2" style={{ height: "100px" }}></textarea>

    {/*SLIDER*/}
    <label htmlFor="range" className="form-label fw-bold mb-3">La taille de police</label>
    <input defaultValue={size} onChange={handleChangeSize} type="range" className="form-range" id="range" min="8" max="48" step="1" />
  </aside>
}

export default WidgetSide