import React from 'react'
import {Modal, ButtonToolbar} from 'react-bootstrap'
import { connect } from 'react-redux'
import * as actions  from '../../actions'

class Menu extends React.Component {
  render() {
   
    const { showHideMenu, showMenu } = this.props 

    return (
      <ButtonToolbar>
        <Modal
          size="lg"
          show={showMenu}
          onHide={()=> showHideMenu(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Menu
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>Categoria</Modal.Body>
        </Modal>
      </ButtonToolbar>
    );
  }
}


const mapStateToProps = (state) => {
 return {
    showMenu: state.request.showMenu,
    
  }
}

export default connect(mapStateToProps, actions)(Menu)