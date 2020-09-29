import React from "react";
import "./Payment.css";
import { useStateValue } from "../../services/StateProvider";
import CheckoutProduct from "../checkout-product/CheckoutProduct";
import { Link } from "react-router-dom";
function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout {<Link to="/checkout">{basket?.length} items</Link>}</h1>
        {/* Payment Section - delivery address  */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email || "guest"}</p>
            <p>123 React Street</p>
            <p>Ajman, UAE</p>
          </div>
        </div>

        {/* Payment section - review items  */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and delivery</h3>
          </div>
          <div className="payment__items">
            {console.log(basket)}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* payment section - payment method/ */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">{/* Stripe method is here */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
