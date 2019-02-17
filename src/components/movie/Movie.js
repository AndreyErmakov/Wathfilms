import React, {Component} from 'react'
import { connect } from 'react-redux'
import loader from '../bars.svg'
import * as actions from '../../actions'
import Iframe from 'react-iframe'
import './movies.css'


 
 class Movie extends Component { 
  componentWillMount(){
    this.url = ''
    const paramsId = this.props.match.params.id
    const paramsCategoria = this.props.match.params.categoria
      if(this.props.newMovies[0] && this.props.films[0] === 1 && this.props.serials[0] === 1){
          this.props.dispatch(actions.fetchMovie(paramsId, paramsCategoria))
      }else{
        return false 
      }
  }
  render() {
    const params = this.props.match.params;
    const props = this.props
    const categoria = params.categoria
    const id = params.id
    for(var key in props){
      if(key === categoria){
       const arr = props[key].filter((r) => r.kinopoisk_id === +id)
       if(arr.length === 0){
        const arrTwo = props.movies.filter((r) => r.kinopoisk_id === +id)
         arrTwo.forEach(element => {
          this.url = element.iframe_url 
          this.kinopoisk_id = element.kinopoisk_id
          this.title = element.title
        });
       }else{
        arr.forEach(element => {
          this.url = element.iframe_url 
          this.kinopoisk_id = element.kinopoisk_id
          this.title = element.title
        });
       }
        
      }
    }
    
    return(
      <div >
         <div className='row movie'>
          <div className="col-md-3 ">
            <img  src={'/img/iphone360_'+this.kinopoisk_id+'.jpg' || '/img/iphone360_1178433.jpg'} alt="description" ></img>
            <h2>{this.title}</h2>
          </div>
          <div  className="col-md-9">
            <img className="rounded mx-auto d-block" src={loader} alt="description"/> 
           <Iframe  url ={this.url}
              width="100%"
              height="385px"
              frameborder="0"
              id="myId"
              display="initial"
              position="relative"
              allowFullScreen/>
               
          </div>
           <div className='col-md-12'>
           <button type="button" className="btn btn-outline-info pull-right">Comment</button>
            <button type="button" className="btn btn-outline-info">More</button>
          </div>
           <div className="media comments">
          <img className="mr-3" src="https://cdn3.iconfinder.com/data/icons/users-6/100/654853-user-men-2-512.png" alt="description" />
          <div className="media-body">
            <h5 className="mt-0">Media heading</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </div>
        <div className="media comments">
          <img className="mr-3" src="https://cdn3.iconfinder.com/data/icons/users-6/100/654853-user-men-2-512.png" alt="description"/>
          <div className="media-body">
            <h5 className="mt-0">Media heading</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </div>
        <div className="media comments">
          <img className="mr-3" src="https://cdn3.iconfinder.com/data/icons/users-6/100/654853-user-men-2-512.png" alt="description" />
          <div className="media-body">
            <h5 className="mt-0">Media heading</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
         
        </div>
        </div>
          <div className="modal"  role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Modal title</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary">Save changes</button>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
      </div>
     )
   }    
}


const mapStateToProps = (state) => {
   return {
    serials:state.request.serials,
    films: state.request.films,
    newMovies: state.request.newMovies,
    isFetching:state.request.isFetching,
    movies: state.request.movies,
  }
 
}

export default connect(mapStateToProps)(Movie)
