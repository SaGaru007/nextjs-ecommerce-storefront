import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`} className="block">
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          className="rounded-md object-cover"
        />

        <h3 className="mt-3 font-semibold text-lg text-gray-900">{product.name}</h3>
        <p className="text-gray-600">₹{product.price}</p>
      </div>
    </Link>
  );
}
