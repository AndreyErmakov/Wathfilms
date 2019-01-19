import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import logo from './logo.svg';
import './App.css';

import Iframe from 'react-iframe'
import Header from './components/header/Header.js'
import Home from './components/home/Home'
// import Movie  from './components/movies/Movies'



class App extends Component {
  render() {
    return (
      <Provider >
        <BrowserRouter >
          <div className='container'>
            <Header />

            <Route exact path='/' component={Home} />
            {/* <Route exact path='/movies' component={Movies} /> */}
          </div>
        </BrowserRouter>
      </Provider>
        

        
       
        // {/* <Iframe url="//hdgo.club/video/Q298nQsLY481iJzUPrlwVnRh6EqC8Ctd/25886/"
        //   width="610px"
        //   height="370px"
        //   frameborder="0"
        //   // id="myId"
        //   // className="myClassname"
        //   // display="initial"
        //   // position="relative"
        //   allowFullScreen/>
        //  */}

    );
  }
}

export default App;
