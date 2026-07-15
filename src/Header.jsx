import {
  FiSearch,
  FiUser,
  FiGrid,
  FiHelpCircle,
  FiHeart,
  FiShoppingCart,
} from "react-icons/fi";

const Header = () => {
  return (
    <header className="h-[72px] flex items-center justify-between px-6 bg-white border-b border-gray-200 gap-5">
      {/* Logo */}
      <div className="flex items-center shrink-0">
        <img
          src="/logo.png"
          alt="Sportsfanda"
          className="h-10 object-contain"
        />
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-[700px] relative">
        <FiSearch className="absolute left-[18px] top-1/2 -translate-y-1/2 text-gray-500 text-lg" />

        <input
          type="text"
          placeholder='Search for "Cricket"'
          className="w-full h-11 rounded-full bg-gray-100 pl-[50px] pr-5 text-[15px] outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-6">
        <NavItem icon={<FiUser size={20} />} label="Sign In" />
        <NavItem icon={<FiGrid size={20} />} label="My Store" />
        <NavItem icon={<FiHelpCircle size={20} />} label="Support" />
        <NavItem icon={<FiHeart size={20} />} label="Wishlist" />
        <NavItem icon={<FiShoppingCart size={20} />} label="Cart" />
      </div>
    </header>
  );
};

const NavItem = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer text-[13px] text-gray-800 hover:text-[#0078ff] transition-colors duration-200">
      <div>{icon}</div>
      <span>{label}</span>
    </div>
  );
};

export default Header;
