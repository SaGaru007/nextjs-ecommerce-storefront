"use client";

import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import ProductGrid from "@/components/ProductsGrid";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Search Results for "{query}"
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="text-lg text-gray-600">
          No products found matching your search.
        </p>
      ) : (
        <>
          <p className="text-lg text-gray-600 mb-6">
            Found {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
          </p>
          <ProductGrid products={filteredProducts} />
        </>
      )}
    </div>
  );
}
