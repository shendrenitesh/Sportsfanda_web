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

  return (
    <div className="relative border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-10 h-14 items-center">
          <button
            onMouseEnter={() => setActiveMenu("sports")}
            className="hover:text-blue-600"
          >
            All Sports
          </button>

          <button
            onMouseEnter={() => setActiveMenu("men")}
            className="hover:text-blue-600"
          >
            Men
          </button>

          <button
            onMouseEnter={() => setActiveMenu("women")}
            className="hover:text-blue-600"
          >
            Women
          </button>

          <button
            onMouseEnter={() => setActiveMenu("kids")}
            className="hover:text-blue-600"
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
