const FontsCard = ({ text, size }) => {


  return <div className="card col-lg-6 p-3">
    <div className="d-flex align-items-center justify-content-between align-items-center mb-2">
      <h3 className="p-0 m-0">Nom de la police</h3>
      <p className="p-0 m-0">Nombre de variant</p>
    </div>
    <p><span className="badge bg-dark text-white fs-5">Type of police</span></p>
    <p style={{ fontSize: `${size}px` }}>{text}</p>
    <a className="text-danger mb-2" href="https://google.com">Lien vers google</a>
  </div>
}

export default FontsCard