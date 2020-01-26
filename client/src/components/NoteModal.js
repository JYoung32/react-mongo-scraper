import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="justify-content-center">
      <Button color="primary" onClick={toggle}>Add a Note</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add a Note</ModalHeader>
        <ModalBody>
            <FormGroup>
            <Label for="exampleText">Note</Label>
            <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Save Note</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;