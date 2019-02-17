import { combineReducers } from 'redux'

const initialState = {
    newMovies:[1,2,3,4,5,6],
    films:[1,2,3,4,5,6],
    serials:[1,2,3,4,5,6],
    isFetching: false,
    loadNewMovies:false,
    loadFilms:false,
    loadSerials:false,
    booleanModal: false,
    modal:{},
    showMenu:false,
    movies:[]
}

function MoviesReducer(state = initialState, action) {
  switch (action.type) {
  
    case 'FETCH_MOVIES_REQUEST':
      return { ...state, isFetching: true };
    case 'FETCH_MOVIES_SUCCESS':
      return { ...state, newMovies: action.movies.newMovies, films: action.movies.films,serials: action.movies.serials, isFetching: false };
  
    case 'FETCH_NEW_MOVIES_REQUEST':
       return { ...state, loadNewMovies: true };
    case 'FETCH_NEW_MOVIES_SUCCESS':
      return { ...state, newMovies: action.movies.newMovies, loadNewMovies: false };

      case 'FETCH_FILMS_REQUEST':
       return { ...state, loadFilms: true };
      case 'FETCH_FILMS_SUCCESS':
       return { ...state, films: action.movies.films, loadFilms: false };

       case 'FETCH_SERIALS_REQUEST':
       return { ...state, loadSerials: true };
      case 'FETCH_SERIALS_SUCCESS':
       return { ...state, serials: action.movies.serials, loadSerials: false };

      case 'FETCH_NEW_MOVIE_SUCCESS':
       return { ...state, newMovies: action.movies.newMovies, isFetching: false };
      case 'FETCH_FILM_SUCCESS':
       return { ...state, films: action.movies.newMovies, isFetching: false };

      case 'FETCH_CATEGORIA_SUCCESS':
       return { ...state, movies: action.movies, isFetching: false };

      case 'FETCH_NEXT_LIST_CATEGORIA_SUCCESS':
       return { ...state, movies: action.movies, isFetching: false };

       case 'SHOW_MODAL':
        return{...state, booleanModal:action.payload, modal:action.modal};

       case 'SHOW_HIDE_MENU':
        return{...state, showMenu:action.payload};
        

    default:
      return state
  }
}



export const rootReducer = combineReducers({
  request:MoviesReducer, 
})