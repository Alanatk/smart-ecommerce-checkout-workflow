import React, { useState } from "react";

function CheckoutForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("Credit Card");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || !address.trim()) {
      setMessage("Please enter name and address.");
      return;
    }

    setMessage(`Order placed for ${name} using ${payment}.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout Form</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />

      <select value={payment} onChange={(event) => setPayment(event.target.value)}>
        <option>Credit Card</option>
        <option>UPI</option>
        <option>Cash on Delivery</option>
      </select>

      <button type="submit">Place Order</button>
      {message && <p className="form-message">{message}</p>}
    </form>
  );
}

export default CheckoutForm;
