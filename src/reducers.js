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
        data: fetchedData
      }
    case "CHANGE_FETCH":
      let newUrl = `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_FONTS_API}&sort=${action.payload}`
      if (action.payload === "favorite") {
        newUrl = `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_FONTS_API}`
      }
      return {
        ...state,
        url: newUrl
      }
    case "CHANGE_FAVORITE":
      return {
        ...state,
        data: state.data.filter((elem) => action.favorite.includes(elem.family))
      }
    case "DISPLAY_SEARCH":
      return {
        ...state,
        isSearch: !state.isSearch,
        url: `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_FONTS_API}&sort=alpha`
      }
    case "CHANGE_FILTER":
      return {
        ...state,
        searchFilter: action.payload
      }
    case "DYNAMIC_SEARCH":
      return {
        ...state,
        data: state.data.filter((elem) => state.searchFilter.startsWith(elem.family))    //elem.family.startsWith(state.searchFilter))
      }
    default:
      throw new Error(`Il y a eu une erreur dans le dispatch: ${action.type}`)
  }
}

export default dataReducer

// "FETCH_INIT" "FETCH_SUCCESS" "FETCH_ERROR" "CHANGE_FETCH"