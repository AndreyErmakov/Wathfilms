import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions  from '../../actions'
import {Modal} from 'react-bootstrap'
import Iframe from 'react-iframe'
import {Link} from 'react-router-dom'
 
class MyVerticallyCenteredModal extends Component{ 
  render(){
    const {showModal} = this.props
    var trailer =  this.props.modal.trailer 
    var iframe = ''
    if(trailer === 'null'){
      iframe = <h4>Not trailer</h4>
    }else{
        iframe = <Iframe
                url ={trailer || ''}
                width="100%"
                height="385px"
                frameborder="0"
                id="myId"
                display="initial"
                position="relative"
                allowFullScreen/>
    }
      
      return (
        <Modal
          show={this.props.booleanModal}
          onHide={() => showModal(false, {})}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
                {iframe}
                <h4>{this.props.modal.title}</h4>
                <Link to={`/${this.props.modal.categoria}/${this.props.modal.kinopoisk_id}`}> 
                    <i className="fa fa-play-circle-o" aria-hidden="true"></i>
                  </Link>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda illo eos odio delectus odit. Officiis, error. Ab saepe nostrum, odio veritatis voluptatum laborum, totam inventore necessitatibus consequuntur ipsam ipsa id.Rerum iusto esse, corporis aliquam aperiam accusamus, architecto excepturi sit atque magni eveniet ipsa vel cum assumenda fuga nisi, adipisci officiis. Pariatur adipisci asperiores libero facilis, dolore minima ipsa quas. 
                </p>
          </Modal.Body>
        </Modal>
      );
  }
}
const mapStateToProps = (state) => {
 return {
    booleanModal: state.request.booleanModal,
    modal: state.request.modal 
  }
}

export default connect(mapStateToProps, actions)(MyVerticallyCenteredModal)
