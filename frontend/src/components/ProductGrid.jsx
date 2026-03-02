import { useEffect, useState } from "react";
import API from "../api/axios";
import ProductCard from "./ProductCard";

function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("products/")
      .then((res) => {
        setProducts(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto mt-12 px-6">
      <h2 className="text-3xl font-bold mb-6">Top Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;