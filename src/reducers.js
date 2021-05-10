const dataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
        error: false,
      }
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload.message
      }
    case "FETCH_SUCCESS":
      let fetchedData = []
      if (state.url.length < 95) {
        fetchedData = action.payload.data.items.filter((elem) => action.favorite.includes(elem.family))
      } else {
        fetchedData = action.payload.data.items
      }
      return {
        ...state,
        loading: false,
        error: false,
        items: action.payload.data.items,
        data: fetchedData
      }
    case "CHANGE_FETCH":
      let newUrl = `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_FONTS_API}&sort=${action.payload}`
      if (action.payload === "favorite") {
        newUrl = `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_FONTS_API}`
      }
      return {
        ...state,
        isSearch: false,
        url: newUrl
      }
    case "CHANGE_FAVORITE":
      return {
        ...state,
        data: state.data.filter((elem) => action.favorite.includes(elem.family))
      }
    case "DISPLAY_SEARCH":
      let newUrl1 = state.url
      if (state.filter === "Mes favoris") {
        newUrl1 = `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_FONTS_API}&sort=alpha`
      }
      return {
        ...state,
        isSearch: !state.isSearch,
        url: newUrl1
      }
    case "CHANGE_FILTER":
      let displayedData = state.items.filter((elem) => elem.family.toLowerCase().includes(action.payload.toLowerCase()))
      return {
        ...state,
        searchFilter: action.payload,
        data: displayedData
      }
    default:
      throw new Error(`Il y a eu une erreur dans le dispatch: ${action.type}`)
  }
}

export default dataReducer