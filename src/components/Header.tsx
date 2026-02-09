"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { cartItems } = useCart();

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">MyStore</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/">Home</Link>

          {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="font-medium"
            >
              Products
            </button>

            {openDropdown && (
              <div className="absolute top-full left-0 bg-white shadow-md rounded mt-1 w-48">
                <Link
                  href="/products"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  All Products
                </Link>
              </div>
            )}
          </div>

          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>

          {/* Cart Link */}
          <Link href="/cart" className="relative">
            <span className="text-xl">🛒</span>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search products..."
            className="border rounded px-3 py-1"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleSearch}
          />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpenDropdown(!openDropdown)}>
          ☰
        </button>
      </nav>
    </header>
  );
}
