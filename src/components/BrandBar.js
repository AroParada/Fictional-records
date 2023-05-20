import {Button, Container, Navbar, Modal} from 'react-bootstrap';
// import { Button } from "@aws-amplify/ui-react"
import {useState} from 'react';

function BrandBar() {
// show or hide modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Fiction Books & records
          </Navbar.Brand>
        </Container>
        <Button onClick={handleShow}>Cart 0 Items</Button>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>This is the cart</h1>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BrandBar;
