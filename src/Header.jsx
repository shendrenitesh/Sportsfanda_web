import React from "react";
import {
  FiUser,
  FiMapPin,
  FiHelpCircle,
  FiHeart,
  FiShoppingCart,
  FiSearch,
} from "react-icons/fi";

// import "./Header.css";

const Header = () => {
  return (
    <header className="h-[72px] flex items-center justify-between px-6 bg-white border-b border-gray-200 gap-5">
      {/* Logo */}
      <div className="h-10 object-contain">
        <img src="/logo.png" alt="Sportsfanda" />
      </div>

      {/* Search */}
      <div className="flex-1 max-w-[700px] relative">
        <FiSearch className="absolute left-[18px] top-1/2 -translate-y-1/2 text-gray-600 text-lg" />
        <input
          className="w-full h-11 rounded-full bg-gray-100 px-5 pl-[50px] text-[15px] outline-none border-none"
          type="text"
          placeholder='Search for "Cricket"'
        />
      </div>

      {/* Navigation */}
      <div className="navItems">
        <div className="navItem">
          <FiUser />
          <span>Sign In</span>
        </div>

        <div className="navItem">
          <FiMapPin />
          <span>My Store</span>
        </div>

        <div className="navItem">
          <FiHelpCircle />
          <span>Support</span>
        </div>

        <div className="navItem">
          <FiHeart />
          <span>Wishlist</span>
        </div>

        <div className="navItem">
          <FiShoppingCart />
          <span>Cart</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
