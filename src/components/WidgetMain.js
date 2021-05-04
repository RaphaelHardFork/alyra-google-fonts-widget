import FontsCard from './FontsCard'

const WidgetMain = ({ filter, text, size, data }) => {
  return <main className="col-lg-9">
    <div className="row mb-5">
      <h2 className="mb-3"><span className="badge bg-danger">{filter}</span></h2>
      {data.map((elem) => {
        return <FontsCard elem={elem} text={text} size={size} />
      })}
    </div>
  </main>
}

export default WidgetMain