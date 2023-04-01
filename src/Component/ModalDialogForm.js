import Form from 'react-bootstrap/Form'
import React, { Component } from 'react'
import Button from 'react-bootstrap/button'
import Modal from 'react-bootstrap/Modal'


export default class ModalDialogForm extends Component {
  render() {
    return (
        <div
        className="modal show"
        style={{ display: 'block' }}
      >
        <Modal.Dialog>
          <Modal.Body>
          <Form.Group >
      <Form.Label>Name: </Form.Label>
              <Form.Control type="text" /> 
              <Form.Label>Code: </Form.Label>
              <Form.Control type="text"  />
                 
          </Form.Group>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="primary" type="submit" onClick={this.props.hideForm}>
              Submit
          </Button>
        </Modal.Footer>
         
          
        </Modal.Dialog >
      </div>
    )
  }
}
