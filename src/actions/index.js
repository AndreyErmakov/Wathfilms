import axios from 'axios'

export const showModal = (payload, modal) => {

  return{
    type: 'SHOW_MODAL',
    payload,
    modal
  }
}

export const showHideMenu = (payload) => {
  return{
    type: 'SHOW_HIDE_MENU',
    payload
  }
}



const fetchMoviesRequest = (movies) => {
  return{
    type: 'FETCH_MOVIES_REQUEST',
    movies
  }
}
const fetchMoviesSuccess = (movies) => {
  return{
    type: 'FETCH_MOVIES_SUCCESS',
    movies
  }
}
export const fetchMovies = () =>{
        return dispatch => {
                dispatch(fetchMoviesRequest())

                axios.get(`/api/main`)
                .then(res => res.data)
                .then(movies => dispatch(fetchMoviesSuccess(movies) ))
        }
}  





const fetchNewMoviesRequest = (movies) => {
  return{
    type: 'FETCH_NEW_MOVIES_REQUEST',
    movies
  }
}
const fetchNewMoviesSuccess = (movies) => {
  return{
    type: 'FETCH_NEW_MOVIES_SUCCESS',
    movies
  }
}

export const fetchNewMoviesUpdate = (data) =>{
       
    return dispatch => {
            dispatch(fetchNewMoviesRequest())
            axios.post('/api/main/newMovies', {newFilmsUpdate:data})
            .then(res => res.data)
            .then(movies => dispatch(fetchNewMoviesSuccess(movies)))
    }
}






const fetchFilmsRequest = (movies) => {
  return{
    type: 'FETCH_FILMS_REQUEST',
    movies
  }
}
const fetchFilmsSuccess = (movies) => {
  return{
    type: 'FETCH_FILMS_SUCCESS',
    movies
  }
}

export const fetchFilmsUpdate = (data) =>{
       
    return dispatch => {
            dispatch(fetchFilmsRequest())
            axios.post('/api/main/films', {newFilmsUpdate:data})
            .then(res =>  res.data)
            .then(movies => dispatch(fetchFilmsSuccess(movies)))
    }
}




const fetchSerialsRequest = (movies) => {
  return{
    type: 'FETCH_SERIALS_REQUEST',
    movies
  }
}
const fetchSerialsSuccess = (movies) => {
  return{
    type: 'FETCH_SERIALS_SUCCESS',
    movies
  }
}

export const fetchSerialsUpdate = (data) =>{
    return dispatch => {
            dispatch(fetchSerialsRequest())
            axios.post('/api/main/serials', {serialsUpdate:data})
            .then(res =>  res.data)
            .then(movies => dispatch(fetchSerialsSuccess(movies)))
    }
}




const fetchNewMovieSuccess = (movies) => {
  return{
    type: 'FETCH_NEW_MOVIE_SUCCESS',
    movies
  }
}
const fetchFilmSuccess = (movies) => {
  return{
    type: 'FETCH_FILM_SUCCESS',
    movies
  }
}



export const fetchMovie = (data, categoria) =>{
    return dispatch => {
      dispatch(fetchMoviesRequest())
      
      if(categoria === "newMovies"){
        axios.post('/api/movies', {movies:data})
        .then(res =>  res.data)
        .then(movies => dispatch(fetchNewMovieSuccess(movies)))
      }else if(categoria === "films"){
        axios.post('/api/movies', {movies:data})
        .then(res =>  res.data)
        .then(movies => dispatch(fetchFilmSuccess(movies)))
      }else if(categoria === "serials"){
        axios.post('/api/movies', {movies:data, categoria:categoria})
        .then(res =>  res.data)
        .then(movies => dispatch(fetchSerialsSuccess(movies)))
      }
      
      
    }
}

const fetchCategoriaSuccess = (movies) => {
  return{
    type: 'FETCH_CATEGORIA_SUCCESS',
    movies
  }
}

export const fetchCategoria = (data, elem) =>{
    return dispatch => {
             dispatch(fetchMoviesRequest())
            axios.post('/api/categoria', {categoria:data,upDate:elem})
            .then(res =>  res.data)
            .then(movies => dispatch(fetchCategoriaSuccess(movies)))
    }
}

// const fetchNextListCategoriaSuccess = (movies) => {
//   return{
//     type: 'FETCH_NEXT_LIST_CATEGORIA_SUCCESS',
//     movies
//   }
// }


// export const getMoviesCategoria = (categoria,elem) =>{
//     return dispatch => {
//             dispatch(fetchMoviesRequest())
//             axios.post('/api/categoria', {categoria:categoria,lastElement:elem})
//             .then(res =>  res.data)
//             .then(movies => dispatch(fetchNextListCategoriaSuccess(movies)))
//     }
// }

