import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setMovies} from '../../actions/MoviesActions'
import Iframe from 'react-iframe'

 class Movies extends Component {
  render() {
    return (
      <div className='content'>
        <Iframe  url={this.props.url.url}
          width="610px"
          height="370px"
          frameborder="0"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          allowFullScreen/>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    url: store.url,
    
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     setYearAction: movie => dispatch(setMovies(movie))
//   }
// }


export default connect(mapStateToProps)(Movies)