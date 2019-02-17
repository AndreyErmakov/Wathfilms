import React from 'react'
import {Link} from 'react-router-dom'
import '../content.css'
import loader from '../bars.svg'
import Button from 'react-bootstrap/Button';



export default function NewMovies (props) {
  const {showModal, categoria} = props
    if(props.isFetching || props.loadMovies === true){
      return props.movies.map((movie, index) => {
        return(
         <div key={index} className='col-md-2 movies'>
           <div className='cart'>
             <img className="loader" src={loader} alt='loader'/>
            </div>
          </div>
      )
      })
        
    }else{
      return props.movies.map((movie, index, arr) =>{ 
    
        return(
          <div key={movie._id || index} className='col-md-2 movies'>
            <div className='cart'>
            <div className='text-center inform'>
                <Link to={`/${categoria}/${movie.kinopoisk_id}`}>
                  <i className="fa fa-play-circle-o" aria-hidden="true"></i>
                </Link>
                <h4>{movie.title}</h4>
                <div className='trailer'>
                  <Button
                    variant="outline-info"
                    onClick={() => showModal(true, {...movie,categoria})}
                  >
                    Description
                  </Button>
                  
                </div>
              </div>
                <img src={'/img/iphone360_'+movie.kinopoisk_id+'.jpg'} className="card-img-top" alt=''></img>
            </div>
          </div>
          )
      })
    }
}
