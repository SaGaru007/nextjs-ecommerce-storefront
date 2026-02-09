import { products } from "@/data/products";
import type { Product } from "@/types/product";
import AddToCartButton from "@/components/AddToCartButton";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p: Product) => p.id === Number(id));

  if (!product) return <div className="text-center py-12"><p className="text-xl text-gray-600">Product not found</p></div>;

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <img src={product.image} alt={product.name} className="w-full rounded-lg object-cover h-64 mb-4" />
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-3 text-sm">{product.description}</p>
        
        <div className="flex items-center gap-3 mb-4">
          <p className="text-2xl font-bold text-green-600">₹{product.price}</p>
          {product.discount && (
            <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-semibold">
              {product.discount}% OFF
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-yellow-500">★</span>
          <span className="font-semibold text-sm">{product.rating}</span>
          <span className="text-gray-600 text-sm">(Reviews)</span>
        </div>

        <AddToCartButton product={product} />
      </div>
    </div>
  );
}

