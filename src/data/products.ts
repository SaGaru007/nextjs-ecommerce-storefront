import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    rating: 4.5,
    discount: 20,
    image: "/headphone.jpg",
    description: "High quality wireless headphones",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 4999,
    rating: 4.2,
    image: "/smartwatch.jpg",
    description: "Modern smart watch with health tracking",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 1499,
    rating: 4.6,
    discount: 10,
    image: "/mouse.jpg",
    description: "RGB gaming mouse with high DPI",
  },
   {
    id: 4,
    name: "Laptop",
    price: 70000,
    rating: 5.0,
    discount: 20,
    image: "/Laptop.jpg",
    description: "15 inch laptop with 16GB RAM and 512GB SSD",
  },
];
