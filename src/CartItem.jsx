import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  const deleteItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Paradise Nursery</div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">
            🛒 Cart ({cartCount})
          </Link>
        </div>
      </nav>

      <div className="cart-page">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>

            <Link to="/plants">
              <button>Continue Shopping</button>
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-item-details">
                    <h2>{item.name}</h2>

                    <p>
                      Unit Price: ₹{item.price}
                    </p>

                    <p>
                      Total: ₹{item.price * item.quantity}
                    </p>

                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          decreaseQuantity(item)
                        }
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          increaseQuantity(item)
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="delete-btn"
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>
                Total Amount: ₹{totalAmount}
              </h2>

              <button
                className="checkout-btn"
                onClick={() =>
                  alert("Checkout Coming Soon!")
                }
              >
                Checkout
              </button>

              <Link to="/plants">
                <button className="continue-btn">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;