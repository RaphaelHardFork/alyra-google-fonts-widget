import { useState, useEffect } from "react" // Importer UseState et UseEffect

import WidgetSide from './WidgetSide'
import WidgetMain from './WidgetMain'

const WidgetApp = () => {
  const [filter, setFilter] = useState("Les plus populaires")
  const [text, setText] = useState("Portez ce vieux whisky au juge blond qui fume !? ")
  const [size, setSize] = useState(20)

  return <div className="container min-vh-100 row my-5 mx-auto">
    <WidgetSide filter={filter} setFilter={setFilter} text={text} setText={setText} size={size} setSize={setSize} />
    <WidgetMain filter={filter} text={text} size={size} />
  </div>
}

export default WidgetApp