import { combineReducers } from 'redux'
import { filmsReducer } from './Films-reducer'
import { newMoviesReducer } from './NewMovies-reducer'
import { MovieReducer } from './Movie-reducer'



export const rootReducer = combineReducers({
  films: filmsReducer,
  newMovies:newMoviesReducer,
  url:MovieReducer
 
})