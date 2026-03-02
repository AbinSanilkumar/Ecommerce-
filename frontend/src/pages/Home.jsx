import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductGrid from "../components/ProductGrid";

function Home() {
  return (
    <div className="bg-gray-200 min-h-screen py-10">
      <div className="max-w-[1400px] mx-auto bg-white rounded-3xl shadow-sm overflow-hidden">
        <Navbar />
        <Hero />
        <Categories />
        <ProductGrid />
      </div>
    </div>
  );
}

export default Home;