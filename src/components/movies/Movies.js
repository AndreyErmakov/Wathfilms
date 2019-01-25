import React, { Component } from 'react'
import { connect } from 'react-redux'
// import * as actions from '../../actions'
import Iframe from 'react-iframe'

 class Movies extends Component {
  // componentWillMount(){
  //   const movieId = this.props.match.params.id

  //   this.props.dispatch(actions.fetchRentalById(movieId))
  // }
  
  
  render() {
    // const moviesId = this.props.match.params.id
    // console.log(moviesId);
    console.log(this.props);
    
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

const mapStateToProps = state => {
  return {
    url: state.url,
    
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     setYearAction: movie => dispatch(setMovies(movie))
//   }
// }


export default connect(mapStateToProps)(Movies)