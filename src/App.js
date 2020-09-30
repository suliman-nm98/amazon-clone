import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Payment from "./components/payment/Payment";
import { auth } from "./firebase";
import { useStateValue } from "./services/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/orders/Orders";
const promise = loadStripe(
  "pk_test_51HWo8UKqI9vJLiaVSjqPQC69WSAcbNWxi72ecCLjPSRRo6HcLbYPU9c6IvyzPcEj2MqhPUUHsSAPGpTq8GpdGRt200HnufO737"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is ", authUser);
      if (authUser) {
        //user logged in / was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {};
  }, []);
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
