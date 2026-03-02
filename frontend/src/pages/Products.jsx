import { useEffect, useState } from "react";
import API from "../api/axios";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("products/")
      .then((res) => {
        console.log(res.data);  // <-- add this temporarily

        if (res.data.results) {
          setProducts(res.data.results);
        } else {
          setProducts(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Products</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              background: "#1e1e1e",
            }}
          >
            <h3>{product.name}</h3>
            <p style={{ fontSize: "14px", color: "#aaa" }}>
              {product.description}
            </p>
            <p style={{ fontWeight: "bold", marginTop: "10px" }}>
              ₹ {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;