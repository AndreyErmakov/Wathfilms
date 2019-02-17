import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions  from '../../actions'
import {Link} from 'react-router-dom'
import './header.css'

class Header extends Component {

  render(){
    const { showHideMenu } = this.props 
    return (
       <nav className="navbar navbar-expand navbar-dark fixed-top bg-dark">
        <div className='container' id='header'>
          <Link className="navbar-brand" to='/'>Watch#Films</Link>

          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
               <button onClick={()=>showHideMenu(true)}  className="btn btn-outline-primary"><span className="navbar-toggler-icon"></span> Menu</button>
            </li>
          </ul>
          <div className="collapse navbar-collapse" id="navbarsHeder">
          
            <form className="form-inline my-2 my-md-0">
              <input className="form-control" type="text" placeholder="Search" />
            </form>
          </div>
          <button  className="btn btn-outline-primary"><i className="fa fa-user-secret" aria-hidden="true"></i></button>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
 return {
    showMenu: state.request.showMenu,
    
  }
}


export default connect(mapStateToProps, actions)(Header)