import { Modal } from "antd";
import React, { useState } from "react";
import CartCard from "./CartCard";
import { useCart } from "../../Utils/CartContext";

export default function CartModal2(props) {
  const [cartData, setCartData] = useState([]);
  // const { cartItems, removeFromCart, calculateTotal } = useCart();

  // const cartInfo = JSON.parse(localStorage.getItem("cart"));
  const clearCart = () => {
    localStorage.removeItem("cartItems");
  };
  // setCartData(cartInfo);

  return (
    <div>
      <Modal
        open={props.modalOpen}
        onCancel={props.onCancel}
        footer={[
          <div className="flex gap-7">
            <button
              onClick={clearCart}
              className="font-semibold bg-absuColor1 text-textWhite p-3 rounded">
              Clear Cart
            </button>
            <button className="font-semibold bg-yellowColor p-3 rounded text-absuColor2">
              Checkout
            </button>
          </div>,
        ]}>
        <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
          <h2 className="text-xl font-semibold">Your cart</h2>
          {props.cartItems.map((res) => {
            return (
              <CartCard
                key={res.objectId}
                img={res.cover_image.url}
                title={res.title}
                price={res.price}
                removeCart={() => props.removeFromCart(res)}
              />
            );
          })}
          {/* </div> */}
        </div>
      </Modal>
    </div>
  );
}
