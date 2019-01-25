const initialState = []

export function newMoviesReducer(state = initialState, action) {
 switch (action.type) {
    case 'FETCH_NEW_MOVIES':
      return { ...state, newMovies: action.payload }

    default:
      return state
  }
}