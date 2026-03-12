import React from "react";
import "./App.css";
import ProductCart from "./ProductCart";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";

function App() {
  return (
    <div className="container">

      <h1>Smart e-Commerce Checkout Workflow</h1>

      <ProductCart />

      <OrderSummary />

      <CheckoutForm />

    </div>
  );
}

export default App;