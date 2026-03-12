import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Smart e-Commerce Checkout Workflow</h1>

      <h2>Cart Items</h2>
      <p>Laptop - $800</p>
      <p>Headphones - $100</p>

      <h2>Order Summary</h2>
      <p>Total Items: 2</p>
      <p>Total Price: $900</p>

      <h2>Checkout Form</h2>

      <input type="text" placeholder="Enter Name" />
      <input type="text" placeholder="Enter Address" />

      <select>
        <option>Credit Card</option>
        <option>UPI</option>
        <option>Cash on Delivery</option>
      </select>

      <button>Place Order</button>
    </div>
  );
}

export default App;