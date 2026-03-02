function Hero() {
  return (
    <div className="px-10 mt-10">
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-3xl p-16 flex justify-between items-center">
        <div className="max-w-lg">
          <h2 className="text-5xl font-extrabold leading-tight">
            SHOP COMPUTERS <br /> & ACCESSORIES
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Shop laptops, desktops, monitors, tablets & more
          </p>

          <button className="mt-8 bg-black text-white px-8 py-3 rounded-xl text-lg hover:bg-gray-800 transition">
            View More
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad"
          className="w-[400px] rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
}

export default Hero;