import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../content.css'

export default class NewMovies extends Component {

  
  render() {
    return this.props.newMovies.map((newMovi, index) =>{
      return(
        <div key={index} className='col-md-2 movies'>
          <div className='cart'>
            <Link to='/movies'>
             <img src={newMovi.img} className="card-img-top"></img>
            </Link>
          </div>
        </div>
      )
    })
        
    
  }
}
