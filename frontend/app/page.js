import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 59.99, image_url: "/products/headphone.jpg" },
    { id: 2, name: "Smart Watch", price: 89.99, image_url: "/products/watch.jpg" },
    { id: 3, name: "Bluetooth Speaker", price: 39.99, image_url: "/products/speaker.jpg" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border border-white p-4 rounded-lg flex flex-col items-center hover:shadow-lg transition-shadow"
        >
          <Image
            src={product.image_url}
            alt={product.name}
            width={200}
            height={200}
            className="rounded border border-white"
          />
          <h3 className="mt-4 font-bold text-lg">{product.name}</h3>
          <p className="mt-2 font-medium">${product.price.toFixed(2)}</p>
          <Link
            href={`/product/${product.id}`}
            className="mt-4 px-4 py-2 bg-[var(--color-navbar)] text-[var(--color-font)] border border-white rounded hover:bg-[var(--color-hover)] transition-colors"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}
