import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-64 text-center">
      {/* Ensure all images are the same size */}
      <Image src={product.image} alt={product.name} width={200} height={200} className="mx-auto" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <p className="text-yellow-500">⭐ {product.rating}</p>
      <button className="mt-3 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
