import React, { Component } from 'react'
import '../content.css'


export default  class NavSerials extends Component {
  render() {
    return (
      <nav className='navbar content'>
        <button  className="btn btn-outline-primary">#Serials</button>
        <button  className="btn btn-outline-primary">More <i className="fa fa-chevron-right" aria-hidden="true"></i></button> 
      </nav>
    )
  }
}
