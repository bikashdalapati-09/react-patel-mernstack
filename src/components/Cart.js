import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((store) => store.cart.cartItems);

  if (cartItems.length === 0) {
    return (
      <div className="mx-10 mt-10">
        <h1 className="text-2xl font-bold">Cart</h1>
        <p className="mt-4 text-gray-600">Your cart is empty 🛒</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-10 mt-10">
      <h1 className="font-bold text-2xl mb-6">Cart</h1>

      {cartItems.map((item, index) => (
        <div
          key={index}
          className="flex gap-6 border p-4 mb-6 rounded-lg shadow"
        >
          <div>
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-cover"
            />
            <h1 className="font-semibold mt-2">{item.name}</h1>
            <p className="text-sm text-gray-500">{item.memory}</p>
            <h2 className="font-bold mt-1">₹ {item.price}</h2>
          </div>

          <div className="text-sm">
            <p>⚡ Performance: {item.performance}</p>
            <p>📷 Camera: {item.camera}</p>
            <p>🔋 Battery: {item.battery}</p>
            <p>📱 Display: {item.display}</p>
            <p>⭐ Rating: {item.rating}</p>
          </div>
        </div>
      ))}
      <button
        className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-green-700 transition cursor-pointer"
        onClick={() => alert("Proceeding to Checkout")}
      >
        Checkout
      </button>
    </div>
  );
}

export default Cart;
