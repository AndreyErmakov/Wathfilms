import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions  from '../../actions'
import MyVerticallyCenteredModal from '../modal'
import {Link} from 'react-router-dom'


import Movies from './Movies'

class Categoria extends Component {

     componentWillMount(){
      this.categoria = this.props.match.params.categoria
      this.props.fetchCategoria(this.categoria,+this.props.match.params.id)
      
      this.props.history.listen((location) => {
        debugger
        const page = +location.pathname.replace(/\D+/g,"")
          if(page === 0){
            return false
          }else{
            this.props.fetchCategoria(this.categoria,page)
          }
        
      
      })
      
    }   
    render(){
      const {showModal} = this.props
      return (
          <div  className='row'>
           <nav  className='col-md-12 navbar content categoria'> 
            <h4 >{this.categoria}</h4>
            {(() => {
                if(this.props.movies.length === 24){
                  return(
                    <Link to={`/${this.props.match.params.categoria}-${+this.props.match.params.id + 1}`}>
                        <button  className="btn btn-outline-primary">
                          More <i className="fa fa-chevron-right " aria-hidden="true"></i>
                        </button>
                      </Link>
                  )
                  
                }
            })()}
          </nav>
            <Movies
              movies={this.props.movies} 
              isFetching={this.props.isFetching} 
              loadMovies={this.props.loadMovies} 
              showModal={showModal}
              categoria={this.categoria}
            />
             <MyVerticallyCenteredModal/>
          </div>
          

         
        
      )
    }
    
  
}

const mapStateToProps = (state) => {
 return {
    movies: state.request.movies,
    isFetching:state.request.isFetching,
  }
}

export default connect(mapStateToProps, actions)(Categoria)