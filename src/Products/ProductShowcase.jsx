"use client";

import { FiHeart } from "react-icons/fi";

const products = [
  {
    id: 1,
    image: "/products/p1.webp",
    title: "Men Gym Trackpants Slim Fit",
    rating: "5.1k",
    price: 899,
    mrp: 1699,
  },
  {
    id: 2,
    image: "/products/p2.webp",
    title: "Men Gym Convertible Jogger",
    rating: "8.2k",
    price: 999,
    mrp: 1499,
  },
  {
    id: 3,
    image: "/products/p3.webp",
    title: "Men Gym Shorts Stretchable",
    rating: "24.9k",
    price: 599,
    mrp: 1299,
  },
  {
    id: 4,
    image: "/products/p4.webp",
    title: "Men Gym Shorts Quick Dry",
    rating: "17.5k",
    price: 399,
    mrp: 699,
  },
  {
    id: 5,
    image: "/products/p5.webp",
    title: "Men Cotton T-Shirt",
    rating: "16.3k",
    price: 299,
    mrp: 399,
  },
];

const ProductShowcase = () => {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Banner */}

          {/* <div
            className="
            lg:w-65
            shrink-0
            flex
            flex-col
            justify-center
            "
          >
            <p className="text-gray-600 text-lg">Shop your</p>

            <h2 className="text-4xl font-bold leading-tight">
              Workout
              <br />
              Checklist
            </h2>
          </div> */}

          {/* Product Slider */}

          <div
            className="
            flex
            gap-4
            overflow-x-auto
            scrollbar-hide
            pb-4
            "
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="
                min-w-55
                md:min-w-62.5
                bg-white
                "
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="
                  w-full
                  h-60
                  object-cover
                  rounded
                  "
                />

                <h3
                  className="
                  mt-3
                  text-sm
                  font-medium
                  line-clamp-2
                  "
                >
                  {product.title}
                </h3>

                <div className="mt-2">
                  ⭐⭐⭐⭐⭐
                  <span className="ml-2 text-gray-600">{product.rating}</span>
                </div>

                <div className="mt-2">
                  <span className="font-bold text-xl">₹{product.price}</span>

                  <span
                    className="
                    ml-2
                    text-gray-500
                    line-through
                    "
                  >
                    ₹{product.mrp}
                  </span>
                </div>

                <div
                  className="
                  mt-4
                  flex
                  items-center
                  gap-2
                  "
                >
                  <button
                    className="
                    border
                    p-2
                    rounded
                    "
                  >
                    <FiHeart />
                  </button>

                  <button
                    className="
                    flex-1
                    border
                    rounded
                    py-2
                    text-sm
                    hover:bg-black
                    hover:text-white
                    transition
                    "
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductShowcase;
