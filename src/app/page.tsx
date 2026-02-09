import { products } from "@/data/products";
import ProductGrid from "@/components/ProductsGrid";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-blue-600 text-white rounded-xl p-10 text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to MyShop</h1>
        <p className="text-lg mb-6">Best products at best prices</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded font-semibold">
          Shop Now
        </button>
      </section>

      {/* OFFER BANNER */}
      <section className="bg-yellow-100 p-6 rounded-lg text-center mb-10">
        <h2 className="text-2xl font-bold"> Special Offers!</h2>
        <p className="mt-2">Up to 50% off on selected items</p>
      </section>

      {/* PRODUCT GRID */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>
        <ProductGrid products={products} />
      </section>
    </>
  );
}
