import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import { store }  from './reducers/cofigureStore'

import './App.css';
import Header from './components/header/Header.js'
import Home from './components/home/Home'
import Movies  from './components/movies/Movies'





class App extends Component {
  render() {
    return (
      <Provider store={ store } >
        <BrowserRouter >
          <div className='container'>
            <Header />

            <Route exact path='/' component={Home} />
            <Route exact path='/movies' component={Movies} />
          </div>
        </BrowserRouter>
       </Provider>
    );
  }
}

export default App;
