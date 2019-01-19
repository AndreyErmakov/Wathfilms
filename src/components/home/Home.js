import React, { Component } from 'react'

import NavMovies from '../newMovies/navMovies'
import NewMovies from '../newMovies/NewMovies'
import NavFilms from '../films/navFilms'
import Films from '../films/Films'
import NavSerials from '../serials/navSerials'
import Serials from '../serials/Serials'

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavMovies />
        <NewMovies />

        <NavFilms />
        <Films />

        <NavSerials />
        <Serials />
      </div>
    )
  }
}
