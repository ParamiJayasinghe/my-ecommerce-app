import ProductCard from "@/component/product";

const products = [
  { id: 1, name: "Instax Mini 11", price: 22500.00, rating: 5, image: "/images/headset.jpg" },
  { id: 2, name: "Instax Mini 11", price: 22500.00, rating: 5, image: "/images/watch.jpg" },
  { id: 3, name: "Instax Mini 11", price: 22500.00, rating: 5, image: "/images/speaker.jpg" },
  { id: 4, name: "Instax Mini 11", price: 22500.00, rating: 5, image: "/images/cam.jpg" },
  { id: 5, name: "Instax Mini 11", price: 22500.00, rating: 5, image: "/images/fun.jpg" },
  { id: 6, name: "Instax Mini 11", price: 22500.00, rating: 5, image: "/images/kettle.jpg" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
        Today's Featured Items
      </h1>
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-green-700 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-green-800 transition duration-300">
          View more
        </button>
      </div>
    </div>
  );
}
