import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { Component } from 'react';
export default class ModalDialogSure extends Component {

  render() {
    return (

      <div
        className="modal show"
        style={{ display: 'block' }}
      >
        <Modal.Dialog>
          <Modal.Body>
            <p>Deleted Successfully</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.props.hide}>Ok</Button>
          </Modal.Footer>
        </Modal.Dialog >
      </div>


    )
  }
}

