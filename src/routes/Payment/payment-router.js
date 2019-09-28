const stripe = require("../../constants/stripe");
const bodyParser = require("body-parser");
const express = require("express");
const paymentRouter = express.Router();

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
};

paymentRouter
  .route("/")
  .get((req, res) => {
    res.send({
      message: "Hello Stripe checkout server!",
      timestamp: new Date().toISOString()
    });
  })
  .post((req, res, next) => {
    stripe.charges
      .create(req.body, postStripeCharge(res))
      .then(data => console.log(data));
  });

module.exports = paymentRouter;
