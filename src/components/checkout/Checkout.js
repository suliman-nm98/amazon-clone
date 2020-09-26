import React from "react";
import "./Checkout.css";
import Subtotal from "../subtotal/Subtotal";
function Checkout() {
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
        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
