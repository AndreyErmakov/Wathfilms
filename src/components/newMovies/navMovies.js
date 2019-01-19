import React, { Component } from 'react'
import '../content.css'


export default  class NavMovies extends Component {
  render() {
    return (
      <nav className='navbar content' id='content'>
        <button  className="btn btn-outline-primary">New#movies</button>
        <button  className="btn btn-outline-primary">More <i className="fa fa-chevron-right" aria-hidden="true"></i></button> 
      </nav>
    )
  }
}
