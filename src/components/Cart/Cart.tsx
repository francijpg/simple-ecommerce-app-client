// Components
import { Wrapper } from "./Cart.styles";
import { Button } from "@material-ui/core";
import CartItem from "../CartItem/CartItem";
// Interfaces
import { Product } from "../../interfaces/Product";
import { StripePayment } from "../../interfaces/Payment";
// Services
import services from "../../services";

type Props = {
  cartItems: Product[];
  addToCart: (clickedItem: Product) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  let totalToPay: number = 0;
  let itemsToPay: StripePayment[];

  const { apiCall, getStripe } = services;

  const calculateTotal = (items: Product[]) => {
    itemsToPay = items.map((item: Product) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          images: [item.image],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.amount,
    }));

    totalToPay = items.reduce(
      (ack: number, item) => ack + item.amount * item.price,
      0
    );
    return totalToPay.toFixed(2);
  };

  const handlePayment = async () => {
    const stripe = await getStripe();
    const response = await apiCall.post(
      "api/create-checkout-session",
      itemsToPay
    );

    // When the customer clicks on the button, redirect them to Checkout.
    const { error } = await stripe!.redirectToCheckout({
      sessionId: response.data.id,
    });

    if (error) {
      console.warn(error.message);
    }
  };

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
          <h2>Total: ${calculateTotal(cartItems)}</h2>
          <Button
            size="large"
            disableElevation
            variant="contained"
            color="primary"
            onClick={() => handlePayment()}
          >
            GO TO PAY
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default Cart;
