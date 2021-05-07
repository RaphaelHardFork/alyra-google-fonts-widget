const FontsCard = ({ text, size, elem, favorite, setFavorite }) => {
  const familyRequest = elem.family.replace(' ', '+')

  const handleFavButton = (elem) => {
    if (favorite.includes(elem.family)) {
      setFavorite(favorite.filter((el) => el !== elem.family))
    } else {
      setFavorite([...favorite, elem.family])
    }
  }
  return <div className="col-lg-6">
    <div className="card shadow p-3 mb-4">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h3 className="p-0 m-0">{elem.family}</h3>
        <p className="p-0 m-0">{elem.variants.length} variant(s)</p>
      </div>
      <p><span className="badge bg-dark text-white fs-5">{elem.category}</span></p>
      <style>
        @import url('https://fonts.googleapis.com/css2?family={familyRequest}&display=swap');
</style>
      <p style={{ fontSize: `${size}px`, fontFamily: `'${elem.family}', cursive` }}>{text}</p>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <a className="text-danger mb-2" href={`https://fonts.google.com/specimen/${familyRequest}`}>Lien vers google</a>
        <button disabled={favorite.length >= 10 && !favorite.includes(elem.family)} onClick={() => handleFavButton(elem)} className={favorite.includes(elem.family) ? "btn btn-danger" : "btn btn-secondary"}>❤️</button>
      </div>
    </div>
  </div >
}

export default FontsCard
