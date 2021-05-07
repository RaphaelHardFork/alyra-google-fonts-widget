import FontsCard from './FontsCard'

const WidgetMain = ({ filter, text, size, data, loading, error, favorite, setFavorite }) => {
  return <main className="col-lg-9">
    <div className="row mb-5">
      <h2 className="mb-3"><span className="badge bg-danger">{filter}</span></h2>
      {loading && <p className="fs-1">Chargement...</p>}
      {error && <p className="alert alert-danger">Il y a eu une erreur : {error}</p>}
      {filter === "Mes favoris" && favorite.length === 0 && <p className="fs-1">Vous n'avez pas de favoris</p>}
      {data.map((elem) => {
        return <FontsCard key={elem.family} favorite={favorite} setFavorite={setFavorite} elem={elem} text={text} size={size} />
      })}
    </div>
  </main>
}

export default WidgetMain