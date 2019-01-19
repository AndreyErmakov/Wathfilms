import React, { Component } from 'react'
import '../content.css'


export default class navFilms extends Component {
  render() {
    return (
      <div>
        <nav className='navbar content'>
        <button  className="btn btn-outline-primary">#Films</button>
        <button  className="btn btn-outline-primary">More <i className="fa fa-chevron-right" aria-hidden="true"></i></button> 
      </nav>
      </div>
    )
  }
}
