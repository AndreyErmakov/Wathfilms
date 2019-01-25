import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions  from '../../actions'


import ListFilm from '../films/ListFilm'
import ListNewMovies from '../newMovies/ListNewMovies'

import NavSerials from '../serials/navSerials'
import Serials from '../serials/Serials'


 class Home extends Component {

   componentWillMount(){
           this.props.dispatch(actions.fetchNewMovies())
   }
   
  //  getFilms(){
  //    this.props.dispatch(actions.fetchNewMoviesUpdate(this.props.newMovies[5]._id))
       
  // }
  render() {
    return (
      <div>
      
        <ListNewMovies newMovies={this.props.newmovies} getFilms={fetchNewMovies} />

        <ListFilm films={this.props.films} />

        <NavSerials />
        <Serials />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  
  return{
    fetchNewMovies:lastMovies => dispatch(actions.fetchNewMoviesUpdate(lastMovies))
  }
}

const mapStateToProps = state => {

 return {
    films: state.films,
    newmovies: state.newmovies.movies
  }
}



export default connect(mapStateToProps , mapDispatchToProps)(Home)