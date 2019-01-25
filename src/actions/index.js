import axios from 'axios'



const fetchMoviesSuccess = (movies) => {
  return{
    type: 'FETCH_NEW_MOVIES',
    movies
  }
}




export const fetchNewMovies = () =>{
       
        return dispatch => {
                axios.get(`/api/main`)
                .then(res => res.data )
                .then(movies => dispatch(fetchMoviesSuccess(movies) ))
        }
}  

export const fetchNewMoviesUpdate = (data) =>{
       
        return dispatch => {
                axios.post('/api/main', {newFilmsUpdate:data})
                .then(res => {
                   console.log(res.data);
                  return res.data
                   })
                .then(movies => dispatch(fetchMoviesSuccess(movies)))
        }
}