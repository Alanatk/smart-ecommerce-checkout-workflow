import React from "react";

function CheckoutForm() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2>Checkout Details</h2>

      <label>Name</label>
      <input type="text" required />

      <label>Address</label>
      <input type="text" required />

      <label>Payment Method</label>
      <select>
        <option>Credit Card</option>
        <option>UPI</option>
        <option>Cash on Delivery</option>
      </select>

      <button type="submit">Place Order</button>

    </form>
  );
}

export default CheckoutForm;