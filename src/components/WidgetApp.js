import { useState, useEffect, useReducer } from "react" // Importer UseState et UseEffect
import axios from 'axios'

// Components
import WidgetSide from './WidgetSide'
import WidgetMain from './WidgetMain'

// Fonction
import { dataReducer } from '../reducers'

const WidgetApp = () => {
  // Variable concernant le rendu
  const [filter, setFilter] = useState("Les plus populaires")
  const [text, setText] = useState("Portez ce vieux whisky au juge blond qui fume !? ")
  const [size, setSize] = useState(20)

  // Variable concernant les données
  const [state, dispatch] = useReducer(dataReducer, {
    // Etat initial
    data: [],
    loading: false,
    error: false,
    url: `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_FONTS_API}&sort=alpha`
  })
  // Extraction des variables du useReducer
  const { url, data, loading, error } = state

  useEffect(() => {
    const dataFetching = async () => {
      dispatch({ type: "FETCH_INIT" })
      try {
        let response = await axios(url)
        //setData(response)
        dispatch({ type: "FETCH_SUCCESS", payload: response })
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error })
      }
    }
    dataFetching()
  }, [url])

  return <div className="container min-vh-100 row my-5 mx-auto">
    <WidgetSide dispatch={dispatch} filter={filter} setFilter={setFilter} text={text} setText={setText} size={size} setSize={setSize} />
    <WidgetMain data={data} filter={filter} text={text} size={size} />
  </div>
}

export default WidgetApp