const initialState = {
  url:'https://hdgo.top/video/trailer/Q298nQsLY481iJzUPrlwVnRh6EqC8Ctd/25948/'
}


export function MovieReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_MOVIES':
      return { ...state, url: action.payload }

    default:
      return state
  }
}