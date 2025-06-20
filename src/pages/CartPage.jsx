import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems
    .reduce(
      (sum, item) => sum + item.quantity * parseFloat(item.price.slice(1)),
      0
    )
    .toFixed(2);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-[#1e1e1e] font-mono">
      <h2 className="text-3xl mb-6 font-bold">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-6">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded border"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-700">
                      {item.quantity} × {item.price}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-right">
            <p className="text-lg font-bold">Total: ${total}</p>
            <button
              onClick={clearCart}
              className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-[#333]"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
