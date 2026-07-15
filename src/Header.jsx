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
    <header className="border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-3 py-3 sm:px-4 lg:flex-row lg:items-center lg:justify-between lg:px-6 lg:py-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex shrink-0 items-center">
            <img
              src="/logo.png"
              alt="Sportsfanda"
              className="h-9 object-contain sm:h-10"
            />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button className="rounded-full p-2 text-gray-700 transition hover:bg-gray-100">
              <FiSearch size={18} />
            </button>
            <button className="rounded-full p-2 text-gray-700 transition hover:bg-gray-100">
              <FiShoppingCart size={18} />
            </button>
          </div>
        </div>

        <div className="relative w-full lg:max-w-[640px] lg:flex-1">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder='Search for "Cricket"'
            className="h-11 w-full rounded-full border border-gray-200 bg-gray-100 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:text-[15px]"
          />
        </div>

        <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-3 lg:justify-end">
          <NavItem icon={<FiUser size={18} />} label="Sign In" />
          <NavItem icon={<FiGrid size={18} />} label="My Store" />
          <NavItem icon={<FiHelpCircle size={18} />} label="Support" />
          <NavItem icon={<FiHeart size={18} />} label="Wishlist" />
          <NavItem icon={<FiShoppingCart size={18} />} label="Cart" />
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ icon, label }) => {
  return (
    <div className="flex min-w-[70px] flex-col items-center gap-1 rounded-lg px-2 py-2 text-center text-[11px] text-gray-700 transition hover:text-[#0078ff] sm:text-[12px]">
      <div>{icon}</div>
      <span>{label}</span>
    </div>
  );
};

export default Header;
