import { Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { Card, Button, Flex, Image, Badge, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


function NewProductCard(props) {
  //props.product is the product we are selling
  const product = props.product;
  // to access the cart object
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);

  return (
    <Card variation="elevated">
      <Flex alignItems="flex-start">
        <Image
          src= {product.image}
          alt="Amplify"
          width="8rem"
        />
        <Flex direction="column" gap="xs">
          <Flex>
            <Badge variation="success">New</Badge>
          </Flex>
          <Text fontSize="large" fontWeight="semibold">
            {product.title}
          </Text>
          <Text color="font.tertiary">Product description</Text>
          <Text fontSize="large" color="secondary">
            ${product.price}
          </Text>
          {productQuantity > 0 ? (
            <>
              <Form as={Row}>
                <Form.Label column="true" sm="6">
                  In Cart: {productQuantity}{" "}
                </Form.Label>
                <Col sm="6">
                  <Button
                    sm="6"
                    onClick={() => cart.addOneToCart(product.id)}
                    className="mx-2"
                  >
                    +
                  </Button>
                  <Button
                    sm="6"
                    onClick={() => cart.removeOneFromCart(product.id)}
                    className="mx-2"
                  >
                    -
                  </Button>
                </Col>
              </Form>
              <Button
                variation="link"
                onClick={() => cart.deleteFromCart(product.id)}
                className="my-2"
              >
                Remove from cart
              </Button>
            </>
          ) : (
            <Button
              variant="primary"
              onClick={() => cart.addOneToCart(product.id)}
            >
              Add To Cart
            </Button>
          )}
        </Flex>
      </Flex>
    </Card>
  );
}

export default NewProductCard;

{/* <Card variation="elevated">
  <Flex alignItems="flex-start">
    <Image src="/amplify-placeholder.svg" alt="Amplify" width="8rem" />
    <Flex direction="column" gap="xs">
      <Flex>
        <Badge variation="success">New</Badge>
      </Flex>
      <Text fontSize="large" fontWeight="semibold">
        {product.title}
      </Text>
      <Text color="font.tertiary">Product description</Text>
      <Text fontSize="large" color="secondary">
        ${product.price}
      </Text>
      <Flex>
        <StepperField
          label="Quantity"
          min={0}
          max={10}
          step={1}
          defaultValue={1}
          labelHidden
        />
        <Button variation="primary">Add to cart</Button>
      </Flex>
    </Flex>
  </Flex>
</Card>; */}
