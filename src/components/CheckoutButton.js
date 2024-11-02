import { loadStripe } from "@stripe/stripe-js";
import { useContext } from "react";
import { CartContext } from "../CartContext";


const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);

const CheckoutButton = () => {
  const cart = useContext(CartContext);
  const cartData = cart.cartDetails;
  console.log(cartData, "what sending");

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    try {
      const response = await fetch(
        "https://1rsmflpz2m.execute-api.us-east-1.amazonaws.com/checkout",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cart: cartData }),
        }
      );
      if (!response.ok) {
        throw new Error("failed to create checkout session");
      }

      const { id: sessionId } = await response.json();

      // Redirect to Stripe Checkout
      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) {
        console.error("Error redirecting to checkout:", error.message);
      }
    } catch (error) {
      console.error("Checkout error:", error.message);
    }
  };

  return <button onClick={handleCheckout}>Checkout</button>;
};

export default CheckoutButton;
