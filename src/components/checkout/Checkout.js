import React from "react";
import "./Checkout.css";
import Subtotal from "../subtotal/Subtotal";
import CheckoutProduct from "../checkout-product/CheckoutProduct";
import { useStateValue } from "../../services/StateProvider";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/39/Gateway/ERC-Header_New_en.jpg"
          className="checkout__ad"
          alt="image"
        />
        <div>
          <h2 className="checkout__title"> Your Shopping Basket</h2>
        </div>
        {/* <FlipMove> */}
        {basket.map((item, i) => (
          <CheckoutProduct
            key={i}
            id={item.id}
            title={item.title}
            image={item.image}
            rating={item.rating}
            price={item.price}
          />
        ))}
        {/* </FlipMove> */}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
