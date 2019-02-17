import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import { store }  from './reducers/cofigureStore'

import './App.css';
import Header from './components/header/Header.js'
import Main from './components/main'
import Menu from './components/menu/Menu'
import Movie  from './components/movie/Movie'
import Categoria  from './components/categoria'


class App extends Component {
  render() {
    return (
      <Provider store={ store } >
        <BrowserRouter >
          <div className='container'>
            <Header />
            <Menu/>
            <Route exact path='/' component={Main} />
            <Route exact  path='/:categoria-:id' component={Categoria} />
            <Route exact  path='/:categoria/:id' component={Movie} />
          </div>
        </BrowserRouter>
       </Provider>
    );
  }
}
 
export default App;
