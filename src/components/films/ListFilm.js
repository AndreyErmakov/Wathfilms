import React, { Component } from 'react'
import Films from './Films'

export default class ListFilm extends Component {
  render() {
    const films = this.props.films
    return (
        <nav className='navbar content'>
            <button  className="btn btn-outline-primary">#Films</button>
            <button  className="btn btn-outline-primary">More <i className="fa fa-chevron-right" aria-hidden="true"></i></button> 

            <div className='row' >
            <Films films={films} />
            </div>
        </nav>
        
        
        /* <NavFilms /> */
       
      
    )
  }
}
