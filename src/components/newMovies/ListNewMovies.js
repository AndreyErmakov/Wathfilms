import React, { Component } from 'react'

import NewMovies from './NewMovies'

export default class ListNewMovies extends Component {
  render() {
    return (
       <nav className='navbar content' id='content'>
        <button  className="btn btn-outline-primary">New#movies</button>
        <button  className="btn btn-outline-primary">More <i className="fa fa-chevron-right" aria-hidden="true"></i></button> 
       
        <div className='row'>
          <NewMovies newMovies={this.props.newMovies} />
        </div>
      </nav>
    )
  }
}
