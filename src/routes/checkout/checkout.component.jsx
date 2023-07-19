import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import CheckoutList from "../../components/checkout-list/checkout-list.component";
import "./checkout.styles.scss";

const Checkout = () => {
  return (
    <>
      <div>Checkout</div>
      <CheckoutList />
    </>
  );
};

export default Checkout;
