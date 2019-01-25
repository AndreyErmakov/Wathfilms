import { combineReducers } from 'redux'
import { filmsReducer } from './Films-reducer'


const initialState = {
  movies:[]
}

function MoviesReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_NEW_MOVIES':
      return { ...state, movies: action.movies }

    default:
      return state
  }
}



export const rootReducer = combineReducers({
  films: filmsReducer,
  newmovies:MoviesReducer,
})