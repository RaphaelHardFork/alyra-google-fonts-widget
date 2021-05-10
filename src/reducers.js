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
      } else if (state.isSearch === true) {
        fetchedData = action.payload.data.items
      } else {
        fetchedData = action.payload.data.items.slice(0, 10)
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
        url: `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_FONTS_API}`
      }
    case "CHANGE_FILTER":
      return {
        ...state,
        data: state.items.filter((elem) => elem.family.startsWith(state.searchFilter)).slice(0, 10)
      }
    default:
      throw new Error(`Il y a eu une erreur dans le dispatch: ${action.type}`)
  }
}

export default dataReducer

// "FETCH_INIT" "FETCH_SUCCESS" "FETCH_ERROR" "CHANGE_FETCH"