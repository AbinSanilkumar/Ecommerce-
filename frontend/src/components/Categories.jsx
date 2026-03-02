function Categories() {
  const categories = [
    "Beauty picks",
    "Computer & Accessories",
    "Video games",
    "Toys & Games",
  ];

  return (
    <div className="px-10 mt-12">
      <h2 className="text-2xl font-bold mb-6">Shop by categories</h2>

      <div className="grid grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-2xl text-center font-semibold"
          >
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;