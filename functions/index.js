const express = require("express");
const functions = require("firebase-functions");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HWo8UKqI9vJLiaVkGFvw8qqLddTgAMydU4y8JAlOj0llCd2dlnNI4iUSCAWIZefaDHXbYUqreBG7OdXP3jN9aNN00xSe6SAuO"
);

// App Config
const app = express();
// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// API routes

app.get("/", (req, res) => res.status(200).send("hello world"));
app.get("/", (req, res) => res.status(200).send("hello world"));
app.post("/payments/create", async (req, res) => {
  const total = Math.round(req.query.total);
  console.log("payment request recienved >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen command
exports.api = functions.https.onRequest(app);

// example end-point
// http://localhost:5001/clone-62c97/us-central1/api
