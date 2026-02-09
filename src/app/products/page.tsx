import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";
import type { Product } from "../../types/product";

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((p: Product) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
