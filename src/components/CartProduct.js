import Button from 'react-bootstrap/Button';
import { CartContext } from '../CartContext'
import { useContext } from 'react';
import { getProductData } from '../productsStore';
import { Image } from "@aws-amplify/ui-react";



function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);
    
    return (
      <>
        <Image src={productData.image} alt="Amplify" width="8rem" />
        <h3>{productData.title}</h3>
        <p>{quantity} total</p>
        <p>${(quantity * productData.price).toFixed(2)}</p>
        <Button size="sm" onClick={() => cart.deleteFromCart(id)}>
          Remove
        </Button>
        <hr></hr>
      </>
    );
}

export default CartProduct