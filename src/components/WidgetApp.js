import { useState, useEffect, useReducer } from "react" // Importer UseState et UseEffect
import axios from 'axios'

// Components
import WidgetSide from './WidgetSide'
import WidgetMain from './WidgetMain'

// Fonction
import dataReducer from '../reducers'

const WidgetApp = () => {
  // Variable concernant le rendu
  const [filter, setFilter] = useState("Par ordre alphabétique")
  const [text, setText] = useState("Portez ce vieux whisky au juge blond qui fume !? ")
  const [size, setSize] = useState(20)

  const [favorite, setFavorite] = useState(() => JSON.parse(localStorage.getItem("my-favorites")) || [])

  // Variable concernant les données
  const [state, dispatch] = useReducer(dataReducer, {
    // Etat initial
    data: [],
    items: [],
    loading: false,
    error: false,
    isSearch: false,
    searchFilter: "",
    url: `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_FONTS_API}&sort=alpha`
  })
  // Extraction des variables du useReducer
  const { url, data, loading, error, searchFilter } = state

  // Fetch data
  useEffect(() => {
    const dataFetching = async () => {
      dispatch({ type: "FETCH_INIT" })
      try {
        let response = await axios(url)
        dispatch({ type: "FETCH_SUCCESS", payload: response, favorite }) // favorite :[]
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error })
      }
    }
    dataFetching()
    // eslint-disable-next-line
  }, [url])

  // save favorite
  useEffect(() => {
    window.localStorage.setItem("my-favorites", JSON.stringify(favorite))
    if (filter === 'Mes favoris') {
      dispatch({ type: "CHANGE_FAVORITE", favorite })
    }
    // eslint-disable-next-line
  }, [favorite])

  /*
    // recherche items
    useEffect(() => {
      dispatch({ type: "CHANGE_FILTER" })
    }, [searchFilter])
  */

  return <div className="container min-vh-100 row my-5 mx-auto">
    <WidgetSide state={state} dispatch={dispatch} filter={filter} setFilter={setFilter} text={text} setText={setText} size={size} setSize={setSize} />
    <WidgetMain favorite={favorite} setFavorite={setFavorite} loading={loading} error={error} data={data} filter={filter} text={text} size={size} />
  </div>
}

export default WidgetApp