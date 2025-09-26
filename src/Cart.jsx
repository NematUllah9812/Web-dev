import { useState } from "react";

function Cart() {

  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  }

  const handleDecrease = () => {
    setQuantity(quantity - 1);
  }
  return (
    <>
      <button onClick={handleIncrease}>+</button>
      <p>{quantity}</p>
      <button onClick={handleDecrease}>-</button>
    </>
  );
}

export default Cart;