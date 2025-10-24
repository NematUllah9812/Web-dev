import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import cod from './assets/cod.jpg';
import elden from './assets/elden.webp';
import bgi from './assets/bgim.jpg'

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Call of Duty: Modern Warfare II",
      price: 59.99,
      quantity: 1,
      image: cod,
    },
    {
      id: 2,
      title: "Elden Ring",
      price: 69.99,
      quantity: 2,
      image: elden,
    },
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, delta) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section
      className="cart-section py-5"
      style={{
        backgroundImage: `url(${bgi})`,
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <h2
          className="fw-bold text-center mb-5"
          style={{
            color: "#ff0011df",
            textShadow: "0 0 10px #ff0011df",
            letterSpacing: "1px",
          }}
        >
          Your Cart
        </h2>

        {cartItems.length === 0 ? (
          <div className="text-center py-5">
            <h5>Your cart is empty 😔</h5>
          </div>
        ) : (
          <div className="row g-4">
            {/* Cart Items */}
            <div className="col-lg-8">
              <div
                className="card border-0 shadow-lg rounded-4 p-4"
                style={{
                  background: "rgba(124, 124, 124, 0.9)",
                  backdropFilter: "blur(6px)",
                }}
              >
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex align-items-center justify-content-between border-bottom border-secondary py-3"
                  >
                    <div className="d-flex align-items-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="rounded me-3"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <h6 className="fw-bold mb-1">{item.title}</h6>
                        <p className="mb-0 text-muted">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-light btn-sm mx-2"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        −
                      </button>
                      <span className="fw-bold">{item.quantity}</span>
                      <button
                        className="btn btn-outline-light btn-sm mx-2"
                        onClick={() => handleQuantityChange(item.id, +1)}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger btn-sm ms-3"
                        onClick={() => handleRemove(item.id)}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="col-lg-4">
              <div
                className="card border-0 shadow-lg rounded-4 p-4"
                style={{
                  background: "rgba(128, 128, 128, 0.9)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <h5 className="fw-bold mb-4 text-center">Order Summary</h5>

                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping</span>
                  <span>$5.00</span>
                </div>
                <hr className="border-secondary" />
                <div className="d-flex justify-content-between fw-bold mb-3">
                  <span>Total</span>
                  <span>${(totalPrice + 5).toFixed(2)}</span>
                </div>

                <button
                  className="btn w-100 fw-bold py-2 rounded-pill"
                  style={{
                    background:
                      "linear-gradient(90deg, #ff0011df, #0078ff, #00e0ff)",
                    border: "none",
                    color: "#fff",
                  }}
                                  >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
