import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './header.css'

export default class Header extends Component {
  render() {
    return (
       <nav className="navbar navbar-expand navbar-dark fixed-top bg-dark">
        <div className='container' id='header'>
        
          <Link className="navbar-brand" to='/'>Wach#Films</Link>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#"><span className="navbar-toggler-icon"></span> Menu</a>
            </li>
          </ul>
          <div className="collapse navbar-collapse" id="navbarsHeder">
          
            <form className="form-inline my-2 my-md-0">
              <input className="form-control" type="text" placeholder="Search" />
            </form>
          </div>
          
           <a href="" id='icon-user'><i className="fa fa-user-secret" aria-hidden="true"></i></a>
        </div>
      </nav>
    )
  }
}
