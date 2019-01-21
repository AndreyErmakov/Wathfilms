import React, { Component } from 'react'
import '../content.css'

export default class Films extends Component {
  render() {

    return this.props.films.map((film, index) => {
      return(
                <div className='col-md-2 movies' key={index}>
                  <div className='cart'>
                    <a >
                      <img src={film.img} className="card-img-top"></img>
                    </a>
                  </div>
                </div>

      )
    }) 
  }
}
