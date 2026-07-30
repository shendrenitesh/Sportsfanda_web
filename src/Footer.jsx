import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-blue-500">Sports</span>
              <span className="text-orange-500">fanda</span>
            </div>
            <p className="text-sm mb-4">Play More. Spend Less.</p>
            <p className="text-sm text-gray-400">
              Your trusted partner for affordable sports equipment and fitness
              gear across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/shop" className="hover:text-white">
                  Shop All Products
                </a>
              </li>
              <li>
                <a href="/videos" className="hover:text-white">
                  Videos
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="/shop?category=Cricket" className="hover:text-white">
                  Cricket
                </a>
              </li>
              <li>
                <a href="/shop?category=Football" className="hover:text-white">
                  Football
                </a>
              </li>
              <li>
                <a href="/shop?category=Gym" className="hover:text-white">
                  Gym & Fitness
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/shipping" className="hover:text-white">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="/returns" className="hover:text-white">
                  Returns Policy
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">
              Subscribe to get special offers and latest updates.
            </p>
            <form className="flex gap-2">
              {/* <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 text-white"
              /> */}
              {/* <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600"
              >
                Subscribe
              </Button> */}
            </form>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-white">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; 2024 Sportsfanda. All rights reserved. Made with ❤️ for
            sports enthusiasts in India.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
