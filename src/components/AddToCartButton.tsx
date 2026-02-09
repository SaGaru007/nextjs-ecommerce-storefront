"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <>
      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition text-sm"
      >
        {isAdded ? "✓ Added to Cart!" : "Add to Cart"}
      </button>
      {isAdded && (
        <p className="text-center text-green-600 text-sm mt-2">
          Product added to cart!
        </p>
      )}
    </>
  );
}
