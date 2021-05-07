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
        for (let elem of action.payload.data.items) {
          if (action.favorite.includes(elem.family)) {
            fetchedData.push(elem)
          }
        }
      } else {
        fetchedData = action.payload.data.items.slice(0, 10)
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
    default:
      throw new Error(`Il y a eu une erreur dans le dispatch: ${action.type}`)
  }
}

export default dataReducer

// "FETCH_INIT" "FETCH_SUCCESS" "FETCH_ERROR" "CHANGE_FETCH"