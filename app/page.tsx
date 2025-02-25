import ProductCard from "@/component/product"; // Import the ProductCard component

const products = [
  { id: 1, name: "Product 1", price: 29.99, rating: 4.5, image: "/images/cam.jpg" },
  { id: 2, name: "Product 2", price: 39.99, rating: 4.2, image: "/images/fun.jpg" },
  { id: 3, name: "Product 3", price: 49.99, rating: 4.8, image: "/images/headset.jpg" },
  { id: 4, name: "Product 4", price: 19.99, rating: 4.1, image: "/images/kettle.jpg" },
  { id: 5, name: "Product 5", price: 59.99, rating: 4.6, image: "/images/speaker.jpg" },
  { id: 6, name: "Product 6", price: 24.99, rating: 4.3, image: "/images/watch.jpg" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {/* "Our Products" heading aligned to the left */}
      <h1 className="text-3xl font-bold mb-6 text-left">Today's featured items</h1>

      {/* Grid layout for the products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex justify-center">
            {/* Each product inside a box with padding and shadow */}
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* View More button centered */}
      <div className="flex justify-center mt-6">
        <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">
          View More
        </button>
      </div>
    </div>
  );
}
