import { Button, Container, Navbar, Modal } from "react-bootstrap";
// import { Button } from "@aws-amplify/ui-react"
import { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";

function BrandBar() {
  const cart = useContext(CartContext);
  // show or hide modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
      method: 'POST',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify({items: cart.items})
    } ).then((response) => {
      return response.json();
    }).then((response) => {
      if(response.url) {
        window.location.assign(response.url); // Foward user to stripe
      }
    })
  }

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            Storyline Records &#128216;
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
                <CartProduct
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                ></CartProduct>
              ))}
              {/* tofixed adds only 2 values after the decimal */}
              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
              <Button variant="success" onClick={checkout}>
                Purchase items
              </Button>
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
