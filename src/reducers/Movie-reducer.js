const initialState = {
  url:'//hdgo.club/video/Q298nQsLY481iJzUPrlwVnRh6EqC8Ctd/25886/'
}


export function MovieReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_MOVIES':
      return { ...state, url: action.payload }

    default:
      return state
  }
}