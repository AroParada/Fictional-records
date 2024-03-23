import Button from "react-bootstrap/Button";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../productsStore";
import { Image, Flex } from "@aws-amplify/ui-react";
import { Col } from "react-bootstrap";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <Flex alignItems="flex-start">
      <Image src={productData.image} alt="Amplify" width="8rem" />
      <Flex direction="column" gap="xs">
        <h3>{productData.title}</h3>
        <p>{quantity} total</p>
        <p>${(quantity * productData.price).toFixed(2)}</p>
        <Col sm="6">
          <Button size="sm" onClick={() => cart.deleteFromCart(id)}>
            Remove
          </Button>
        </Col>
        <hr></hr>
      </Flex>
    </Flex>
  );
}

export default CartProduct;
