import { Row, Col } from "react-bootstrap";
import { productsArray } from "../productsStore";
import NewProductCard from "../components/NewProductCard";

function Shop() {
  return (
    <>
      <h1 align="center" className="p-3">Welcome to the Store</h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, idx) => (
          <Col align="center" key={idx}>
            <NewProductCard product={product}/>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Shop;
