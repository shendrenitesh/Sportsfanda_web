import { useState } from "react";
import MegaMenu from "./MegaMenu";
// import { menuData } from "./menuData";

const CategoryNav = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuData = {
    sports: [
      {
        title: "Outdoor Sports",
        items: ["Hiking", "Camping", "Cycling", "Fishing", "Rock Climbing"],
      },
      {
        title: "Fitness Sports",
        items: ["Gym", "Yoga", "Crossfit", "Martial Arts"],
      },
      {
        title: "Team Sports",
        items: ["Football", "Cricket", "Basketball", "Volleyball"],
      },
      {
        title: "Water Sports",
        items: ["Swimming", "Surfing", "Kayaking"],
      },
      {
        title: "Racket Sports",
        items: ["Badminton", "Tennis", "Squash"],
      },
    ],

    men: [
      {
        title: "Topwear",
        items: ["T-Shirts", "Shirts", "Polos", "Jackets"],
      },
      {
        title: "Bottomwear",
        items: ["Shorts", "Track Pants", "Joggers"],
      },
      {
        title: "Footwear",
        items: ["Sports Shoes", "Running Shoes"],
      },
    ],

    women: [
      {
        title: "Women Topwear",
        items: ["T-Shirts", "Tank Tops", "Hoodies"],
      },
      {
        title: "Women Footwear",
        items: ["Sports Shoes", "Walking Shoes"],
      },
    ],

    kids: [
      {
        title: "Kids Collection",
        items: ["Topwear", "Bottomwear", "Footwear", "Accessories"],
      },
    ],
  };

  const handleMenuToggle = (menu) => {
    setActiveMenu((current) => (current === menu ? null : menu));
  };

  return (
    <div className="relative border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <div className="flex h-14 items-center gap-3 overflow-x-auto whitespace-nowrap sm:gap-6 md:gap-8">
          <button
            onMouseEnter={() => setActiveMenu("sports")}
            onClick={() => handleMenuToggle("sports")}
            className="shrink-0 rounded-full px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
          >
            All Sports
          </button>

          <button
            onMouseEnter={() => setActiveMenu("men")}
            onClick={() => handleMenuToggle("men")}
            className="shrink-0 rounded-full px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
          >
            Men
          </button>

          <button
            onMouseEnter={() => setActiveMenu("women")}
            onClick={() => handleMenuToggle("women")}
            className="shrink-0 rounded-full px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
          >
            Women
          </button>

          <button
            onMouseEnter={() => setActiveMenu("kids")}
            onClick={() => handleMenuToggle("kids")}
            className="shrink-0 rounded-full px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
          >
            Kids
          </button>
        </div>
      </div>

      {activeMenu && (
        <div onMouseLeave={() => setActiveMenu(null)}>
          <MegaMenu sections={menuData[activeMenu]} />
        </div>
      )}
    </div>
  );
};

export default CategoryNav;
