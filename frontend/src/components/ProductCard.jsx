function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 hover:shadow-md transition">
      <img
        src={product.image || "https://via.placeholder.com/300"}
        className="h-48 w-full object-cover rounded-xl"
      />

      <h3 className="mt-4 font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-500 text-sm">{product.description}</p>

      <p className="mt-2 font-bold text-lg">₹ {product.price}</p>

      <button className="mt-3 bg-yellow-500 w-full py-2 rounded-lg font-semibold">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;