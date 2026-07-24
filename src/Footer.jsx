import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#3647B8] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Left Column */}
          <div>
            <div>
              <h2 className="text-4xl font-bold">SPORTSFANDA</h2>
            </div>

            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#3647B8] transition">
                <FaFacebookF />
              </button>

              <button className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#3647B8] transition">
                <FaXTwitter />
              </button>

              <button className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#3647B8] transition">
                <FaYoutube />
              </button>

              <button className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#3647B8] transition">
                <FaInstagram />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="uppercase font-bold mb-5">Services</h3>

            <ul className="space-y-3 text-base">
              <li>
                <a href="#">Sportsfanda for Schools</a>
              </li>
              <li>
                <a href="#">Sportsfanda for Corporates</a>
              </li>
              <li>
                <a href="#">Sportsfanda for Clubs</a>
              </li>
              <li>
                <a href="#">Gift Card</a>
              </li>
              <li>
                <a href="#">Affiliate Program</a>
              </li>
              <li>
                <a href="#">Buy Back</a>
              </li>
              <li>
                <a href="#">Installation & Assembly</a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="uppercase font-bold mb-5">Help</h3>

            <ul className="space-y-3 text-base">
              <li>
                <a href="#">Find a Store</a>
              </li>
              <li>
                <a href="#">Return Policy</a>
              </li>
              <li>
                <a href="#">Shipping Policy</a>
              </li>
              <li>
                <a href="#">Track Order</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="uppercase font-bold mb-5">About</h3>

            <ul className="space-y-3 text-base">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Made In India</a>
              </li>
              <li>
                <a href="#">Social Initiatives</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 text-sm">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>

          <div className="text-sm text-center md:text-right">
            © 2026 Sportsfanda Pvt. Ltd.
            <br />
            All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
