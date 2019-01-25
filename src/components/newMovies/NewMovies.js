import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../content.css'

export default class NewMovies extends Component {

  
  render() {
    return this.props.newMovies.map((newMovi, index) =>{
      return(
        <div key={index} className='col-md-2 movies'>
          <div className='cart'>
            <Link to={'/movies:'+newMovi.kinopoisk_id}>
             <img src={'https://st.kp.yandex.net/images/film_iphone/iphone360_'+newMovi.kinopoisk_id+'.jpg'} className="card-img-top"></img>
            </Link>
          </div>
        </div>
      )
    })
        
    
  }
}
