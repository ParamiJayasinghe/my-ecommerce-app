import Image from 'next/image'; // Import the Image component
import ProductCard from "../component/product";
import { FaRegHeart, FaStar } from "react-icons/fa"; // Importing the outline heart and filled star from React Icons


// Today's featured products
const featuredProducts = [
  { id: 1, name: "Instax Mini 11", price: 22500.00, rating: 5, image: "/images/headset.jpg" },
  { id: 2, name: "Instax Mini 11", price: 22500.00, rating: 5, image: "/images/watch.jpg" },
  { id: 3, name: "Instax Mini 11", price: 22500.00, rating: 5, image: "/images/speaker.jpg" },
  { id: 4, name: "Instax Mini 11", price: 22500.00, rating: 5, image: "/images/cam.jpg" },
  { id: 5, name: "Instax Mini 11", price: 22500.00, rating: 5, image: "/images/fun.jpg" },
  { id: 6, name: "Instax Mini 11", price: 22500.00, rating: 5, image: "/images/kettle.jpg" },
];

// Best selling products
const bestSellingProducts = [
  { id: 7, name: "Apple iPhone 14", price: 120000.00, rating: 4, image: "/images/cam.jpg" },
  { id: 8, name: "Samsung Galaxy S21", price: 95000.00, rating: 5, image: "/images/fun.jpg" },
  { id: 9, name: "Sony WH-1000XM4", price: 35000.00, rating: 5, image: "/images/headset.jpg" },
  
];

// Today's Deals (Discounted Prices)
const todayDeals = [
  { id: 13, name: "Apple iPhone 13", originalPrice: 120000.00, discountedPrice: 100000.00, image: "/images/cam.jpg" },
  { id: 14, name: "Sony WH-1000XM3", originalPrice: 35000.00, discountedPrice: 28000.00, image: "/images/headset.jpg" },
  { id: 15, name: "GoPro Hero 9", originalPrice: 70000.00, discountedPrice: 60000.00, image: "/images/fun.jpg" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      {/* Today's Featured Items Section */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
        Today's Featured Items
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-green-700 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-green-800 transition duration-300">
          View more
        </button>
      </div>

      {/* Best Selling Products Section */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left mt-12">
        Best Selling Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {bestSellingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-green-700 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-green-800 transition duration-300">
          View more
        </button>
      </div>

      {/* Today's Deals Section */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left mt-12">
        Today's Deals
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {todayDeals.map((deal) => (
          <div key={deal.id} className="relative bg-white shadow-lg rounded-lg p-6 text-center  w-full h-[500px] mx-auto transition-transform hover:scale-105 duration-300 mb-4">
            {/* Outline Heart Icon (Moved to Top Left) */}
                  <div className="absolute top-2 left-2 bg-gray-200 rounded-full p-1 shadow cursor-pointer hover:scale-110 transition">
                    <FaRegHeart className="w-6 h-6 text-red-500" />
                  </div>
            
            {/* Image Section */}
            <div className="p-4 h-2/3 flex items-center justify-center">
              <Image
                src={deal.image}
                alt={deal.name}
                width={200}
                height={200}
                className="w-full h-full object-contain rounded-lg"
                />
            </div>

            {/* Name and Price */}
            <div className="flex flex-col items-center mt-6">
              <h2 className="font-semibold text-gray-800 leading-tight truncate text-lg">{deal.name}</h2>
              <div className="flex items-center mt-3">
                <p className="text-gray-400 line-through text-sm mr-2">LKR {deal.originalPrice.toFixed(2)}</p>
                <p className="text-red-500 font-bold text-lg">LKR {deal.discountedPrice.toFixed(2)}</p>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="mt-6 border-2 border-green-700 text-green-700 bg-white py-3 px-8 rounded-3xl hover:bg-green-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 text-sm md:text-base">
  Add to Cart
</button>
          </div>
        ))}
      </div>
    </div>
  );
}
