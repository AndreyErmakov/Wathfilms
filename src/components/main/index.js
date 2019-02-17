import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions  from '../../actions'
import ListMovies from '../movies/ListMovies'
import MyVerticallyCenteredModal from '../modal'

 class Main extends Component {
   componentWillMount(){
      if(this.props.films[0] === 1 || this.props.newMovies[0]  === 1 || this.props.serials[0] === 1 ){
         this.props.fetchMovies()
      }else{
        return false 
      }
      this.props.history.listen(() => {
            this.props.fetchMovies()
      })
   }  
  render() {
    const { fetchNewMoviesUpdate, 
            fetchFilmsUpdate,
            fetchSerialsUpdate, 
            showModal,
            isFetching } = this.props

    return (
      <div>
        <ListMovies 
          getMovies={fetchNewMoviesUpdate}
          movies={this.props.newMovies} 
          isFetching={isFetching} 
          loadMovies={this.props.loadNewMovies} 
          showModal={showModal}
          categoria={'newMovies'}
        />

        <ListMovies 
          getMovies={fetchFilmsUpdate}
          movies={this.props.films} 
          isFetching={isFetching} 
          loadMovies={this.props.loadFilms} 
          showModal={showModal}
          categoria={'films'}

        />

        <ListMovies 
          getMovies={fetchSerialsUpdate}
          movies={this.props.serials} 
          isFetching={isFetching} 
          loadMovies={this.props.loadSerials} 
          showModal={showModal}
          categoria={'serials'}
        />
        <MyVerticallyCenteredModal/>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
 return {
    films: state.request.films,
    newMovies: state.request.newMovies,
    serials: state.request.serials,
    isFetching:state.request.isFetching,
    loadFilms: state.request.loadFilms,
    loadNewMovies: state.request.loadNewMovies,
    loadSerials: state.request.loadSerials,
  }
}



export default connect(mapStateToProps, actions)(Main)