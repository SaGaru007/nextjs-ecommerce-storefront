"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
        <p className="text-gray-600 mb-6">Your cart is empty</p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Product</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Quantity</th>
              <th className="px-4 py-3 text-left">Total</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="rounded"
                    />
                    <span className="font-semibold">{item.name}</span>
                  </div>
                </td>
                <td className="px-4 py-4">₹{item.price}</td>
                <td className="px-4 py-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="w-16 border rounded px-2 py-1"
                  />
                </td>
                <td className="px-4 py-4 font-semibold">
                  ₹{item.price * item.quantity}
                </td>
                <td className="px-4 py-4">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 font-semibold text-sm"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-gray-100 rounded-lg p-6 max-w-md ml-auto">
        <div className="flex justify-between mb-2">
          <span>Subtotal:</span>
          <span>₹{cartTotal}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="border-t pt-2 flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>₹{cartTotal}</span>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <Link
          href="/"
          className="flex-1 bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 text-center font-semibold"
        >
          Continue Shopping
        </Link>
        <button className="flex-1 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 font-semibold">
          Checkout
        </button>
      </div>
    </div>
  );
}
