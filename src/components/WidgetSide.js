const WidgetSide = ({ filter, setFilter, text, setText, size, setSize }) => {
  const handleChangeFilter = (e) => {
    setFilter(e.target.value)
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
    <select value={filter} onChange={handleChangeFilter} className="form-select mb-4" id="font-select" aria-label="Default select example">
      <option value="Les plus récentes">Les plus récentes</option>
      <option value="Les plus populaires">Les plus populaires</option>
      <option value="Top 10 trending">Top 10 trending</option>
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