function Navbar() {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">amazon</h1>

        <div className="hidden md:flex gap-6 text-gray-600">
          <span>Today's Deals</span>
          <span>Gift Cards</span>
          <span>Registry</span>
        </div>

        <div className="flex gap-4">
          <button className="text-gray-600">Login</button>
          <button className="bg-black text-white px-4 py-2 rounded-lg">
            Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;