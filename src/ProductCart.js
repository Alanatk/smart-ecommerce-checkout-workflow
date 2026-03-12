import React from "react";

function ProductCart() {
  return (
    <div>
      <h2>Cart Items</h2>

      <div className="product">
        <p>Product: Laptop</p>
        <p>Price: $800</p>
      </div>

      <div className="product">
        <p>Product: Headphones</p>
        <p>Price: $100</p>
      </div>

    </div>
  );
}

export default ProductCart;