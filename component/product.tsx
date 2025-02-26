import Image from "next/image";
import { FaRegHeart, FaStar } from "react-icons/fa"; // Importing the outline heart and filled star from React Icons

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  // Generate the filled stars based on the rating (rating out of 5)
  const filledStars = Array.from({ length: 5 }, (_, index) => (
    <FaStar
      key={index}
      className={`w-4 h-4 ${index < product.rating ? "text-green-500" : "text-gray-300"}`}
    />
  ));

  return (
    <div className="relative bg-white shadow-lg rounded-lg p-4 text-center border-2 border-gray-400 w-full sm:w-72 md:w-80 lg:w-96 mx-auto transition-transform hover:scale-105 duration-300 h-72 md:h-80 lg:h-96 mb-4">
      {/* Outline Heart Icon (Moved to Top Left) */}
      <div className="absolute top-2 left-2 bg-gray-200 rounded-full p-1 shadow cursor-pointer hover:scale-110 transition">
        <FaRegHeart className="w-6 h-6 text-red-500" />
      </div>

      {/* Image Section */}
      <div className="p-4 h-2/3 flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Name and Price in One Line with Increased Space Between */}
      <div className="flex justify-between items-center mt-3 text-base md:text-lg">
        <h2 className="font-semibold truncate">{product.name}</h2>
        <p className="text-gray-800 font-bold ml-16">LKR {product.price.toFixed(2)}</p> {/* Increased space with ml-16 */}
      </div>

      {/* Green-Filled Stars */}
      <div className="flex space-x-1 mt-1">
        {filledStars} {/* Display Filled Green Stars */}
      </div>

      {/* Add to Cart Button (Rounded Corners) */}
      <button className="mt-3 border-2 border-green-700 text-green-700 py-2 px-5 rounded-lg hover:bg-green-700 hover:text-white transition duration-300 text-sm md:text-base">
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
