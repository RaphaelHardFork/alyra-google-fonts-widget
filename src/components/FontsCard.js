const FontsCard = ({ text, size, elem }) => {
  const familyRequest = elem.family.replace(' ', '+')

  return <div className="col-lg-6">
    <div className="card shadow p-3 mb-4">
      <div className="d-flex align-items-center justify-content-between align-items-center mb-2">
        <h3 className="p-0 m-0">{elem.family}</h3>
        <p className="p-0 m-0">{elem.variants.length} variant(s)</p>
      </div>
      <p><span className="badge bg-dark text-white fs-5">{elem.category}</span></p>
      <style>
        @import url('https://fonts.googleapis.com/css2?family={familyRequest}&display=swap');
</style>
      <p style={{ fontSize: `${size}px`, fontFamily: `'${elem.family}', cursive` }}>{text}</p>
      <a className="text-danger mb-2" href={`https://fonts.google.com/specimen/${familyRequest}`}>Lien vers google</a>
    </div>
  </div>
}

export default FontsCard