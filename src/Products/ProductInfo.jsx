"use client";

import { useState } from "react";
import { FiHeart } from "react-icons/fi";

export default function ProductInfo({ product }) {
  const [size, setSize] = useState("M");

  return (
    <div>
      <p className="text-gray-500">{product.brand}</p>

      <h1 className="text-3xl font-bold mt-2">{product.name}</h1>

      <div className="mt-3">
        ⭐⭐⭐⭐⭐
        <span className="ml-2">
          {product.rating} ({product.reviews})
        </span>
      </div>

      <div className="mt-5">
        <span className="text-3xl font-bold">₹{product.price}</span>

        <span className="ml-3 line-through text-gray-500">₹{product.mrp}</span>
      </div>

      {/* Colors */}

      <div className="mt-8">
        <h3 className="font-semibold mb-3">Colors</h3>

        <div className="flex gap-3">
          {product.colors.map((color) => (
            <button
              key={color}
              className="
                border
                px-4 py-2
                rounded-lg
              "
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Sizes */}

      <div className="mt-8">
        <h3 className="font-semibold mb-3">Sizes</h3>

        <div className="flex gap-3">
          {product.sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`
                px-4 py-2 rounded-lg border
                ${size === s ? "bg-black text-white" : ""}
              `}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Buttons */}

      <div className="mt-8 flex gap-3">
        <button
          className="
          flex-1
          bg-blue-600
          text-white
          py-3
          rounded-lg
          "
        >
          Add To Cart
        </button>

        <button
          className="
          border
          p-3
          rounded-lg
          "
        >
          <FiHeart />
        </button>
      </div>
    </div>
  );
}
