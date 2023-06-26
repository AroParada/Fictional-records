import {Button, Container, Navbar, Modal} from 'react-bootstrap';
// import { Button } from "@aws-amplify/ui-react"
import {useState, useContext} from 'react';
import { CartContext } from '../CartContext';

function BrandBar() {
  const cart = useContext(CartContext);
// show or hide modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

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
        <Button onClick={handleShow}>Cart ({productsCount}) Items</Button>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct, idx) => (
                <h1>{currentProduct.id}</h1>
              ))}
              {/* tofixed adds only 2 values after the decimal */}
              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
              <Button variant="successs">Purchase items</Button>
            </>
          ) : (
            <h1>There are no items in your cart!</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BrandBar;
