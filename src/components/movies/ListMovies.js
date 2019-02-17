import React from 'react'
import NewMovies from './Movies'
import {Link} from 'react-router-dom'
 

export default function ListNewMovies (props) {
    let nexList = () => props.getMovies(props.movies[5]._id)
    return (
       <nav  className='navbar content'>
       
          <Link to={`/${props.categoria}-1`}>
           <button  className="btn btn-outline-primary">
             {props.categoria}  
           </button>
                 
          </Link>
        <button onClick={ nexList }  className="btn btn-outline-primary">
         More 
         <i className="fa fa-chevron-right" aria-hidden="true"></i></button> 
       
        <div  className='row'>
        
          <NewMovies
            movies={props.movies} 
            isFetching={props.isFetching} 
            loadMovies={props.loadMovies} 
            showModal={props.showModal}
            categoria={props.categoria}
          />
        </div>
      </nav>
    )
  
}