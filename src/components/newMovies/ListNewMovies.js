import React, { Component } from 'react'
// import * as actions  from '../../actions'
import NewMovies from './NewMovies'

 class ListNewMovies extends Component {
  
  
  render() {
    return (
       <nav className='navbar content' id='content'>
        <button  className="btn btn-outline-primary">New#movies</button>
        <button onClick={this.props.getFilms}  className="btn btn-outline-primary">More <i className="fa fa-chevron-right" aria-hidden="true"></i></button> 
       
        <div className='row'>
          <NewMovies newMovies={this.props.newMovies} />
        </div>
      </nav>
    )
  }
}

// const mapStateToProps = state => {
//   console.log(state);
  
//  return {
//     films: state.films,
//     newmovies: state.newmovies
//   }
// }

export default ListNewMovies