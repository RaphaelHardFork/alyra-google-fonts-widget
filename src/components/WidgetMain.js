import FontsCard from './FontsCard'

const WidgetMain = ({ filter, text, size }) => {
  return <main className="col-lg-9">
    <div className="row mb-5">
      <h2 className="p-0 mb-3"><span className="badge bg-danger">{filter}</span></h2>
      <FontsCard text={text} size={size} />
    </div>
  </main>
}

export default WidgetMain