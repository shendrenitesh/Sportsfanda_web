import "./App.css";
import Header from "./Header";
import SportsCarousel from "./SportsCarousel";
import CategoryNav from "./CatagoryNav/CatagoryNav";
import DeliveryLocation from "./DeliveryLocation";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto flex w-full max-w-7xl flex-col">
        <Header />
        <div className="px-3 py-3 sm:px-4 lg:px-6">
          <DeliveryLocation />
        </div>
        <CategoryNav />
        <div className="px-3 py-4 sm:px-4 lg:px-6 lg:py-6">
          <SportsCarousel />
        </div>
      </div>
    </div>
  );
}

export default App;
