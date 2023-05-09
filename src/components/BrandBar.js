import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "@aws-amplify/ui-react"

function BrandBar() {
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
        <Button>Cart 0 Items</Button>
      </Navbar>
    </>
  );
}

export default BrandBar;
