import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "../../services/StateProvider";
import CheckoutProduct from "../checkout-product/CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import axios from "../axios/axios";
import { getBasketTotal } from "../../reducer";
import CurrencyFormat from "react-currency-format";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
function Payment() {
  const [{ user, basket }, dispatch] = useStateValue();
  const history = useHistory();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //   egenerate stripe secret to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //stripe epects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
    return () => {};
  }, [basket]);

  console.log("The secret is >>>", clientSecret);
  //stripe hooks
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    //   handle stripe submit
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ payementIntent }) => {
        //paymentIntent = stripe payment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    //   1. Listen to changes in the card element
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
    //   2. display errors as user types card details
  };
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
                price={item.price}
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

          <div className="payment__details">
            {/* Stripe method is here */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>
                        Order Total: <strong>{value}</strong>
                      </h3>
                    </>
                  )}
                  decimalScale={2}
                  // value={addTotal(basket)}
                  // alt
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeperator={true}
                  prefix={"$"}
                />

                <button
                  disabled={processing || disabled || succeeded}
                  onClick={(e) => {}}
                >
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
