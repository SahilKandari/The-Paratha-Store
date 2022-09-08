import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import OrderSummary from "./OrderSummary";
function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartLength = cartItems.length;
  return cartLength > 0 ? (
    <div className="cart_section">
      <div className="cart_myCart">
        <h4>My Cart</h4>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <CartItem data={item} />
            </li>
          ))}
        </ul>
      </div>
      <div className="cart_orderSummary">
        <h4>Order Summary</h4>
        <OrderSummary subData={cartItems} />
      </div>
    </div>
  ) : (
    <h3 className="cart_empty"> Please add some items in your cart first...</h3>
  );
}

export default Cart;
