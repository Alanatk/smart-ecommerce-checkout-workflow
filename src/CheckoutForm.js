import React from "react";

function CheckoutForm() {
  return (
    <div>
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

export default CheckoutForm;
