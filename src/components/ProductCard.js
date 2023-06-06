import {Card, Button, Form, Row, Col } from 'react-bootstrap'
import { CartContext } from '../CartContext';
import { useContext } from 'react';


function ProductCard(props) {  //props.product is the product we are selling
    const product = props.product;
    // to access the cart object
    const cart = useContext(CartContext)
    const ProductQuantity = cart.getProductQuantity(product.id);
    console.log(cart.items);
    
    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant='primary' onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;