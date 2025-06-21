import { useCart } from "../context/CartContext";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const CartIcon = () => {
  const { cartItems } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPreview, setShowPreview] = useState(false);

  const isCartPage = location.pathname === "/cart";

  return (
    <div
      className="fixed top-4 right-4 z-[9999]"
      onMouseEnter={() => !isCartPage && setShowPreview(true)}
      onMouseLeave={() => setShowPreview(false)}
    >
      <div
        onClick={() => navigate("/cart")}
        className="relative bg-black text-white px-3 py-2 rounded cursor-pointer"
      >
        🛒 Cart
        {total > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
            {total}
          </span>
        )}
      </div>

      {!isCartPage && showPreview && cartItems.length > 0 && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-[#1e1e1e] rounded shadow-lg p-3 text-sm font-mono text-[#1e1e1e]">
          <h4 className="font-bold mb-2">🧺 Items in Cart:</h4>
          <ul className="max-h-40 overflow-y-auto space-y-2">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>{item.name}</span>
                <span>x{item.quantity}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={() => navigate("/cart")}
            className="mt-3 w-full bg-black text-white py-1 rounded hover:bg-[#333]"
          >
            View Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default CartIcon;
