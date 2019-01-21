import React, { Component } from 'react'
import { connect } from 'react-redux'


import ListFilm from '../films/ListFilm'
import ListNewMovies from '../newMovies/ListNewMovies'

import NavSerials from '../serials/navSerials'
import Serials from '../serials/Serials'


 class Home extends Component {
  render() {
    return (
      <div>
      
        <ListNewMovies newMovies={this.props.newMovies} />

        <ListFilm films={this.props.films} />

        <NavSerials />
        <Serials />
      </div>
    )
  }
}


const mapStateToProps = store => {
  console.log(store.films);
  
 return {
    films: store.films,
    newMovies:store.newMovies
  }
}



export default connect(mapStateToProps)(Home)