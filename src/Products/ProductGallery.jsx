"use client";

import { useState } from "react";

export default function ProductGallery({ images }) {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div>
      <div className="border rounded-lg overflow-hidden">
        <img src={selected} alt="" className="w-full object-cover" />
      </div>

      <div className="flex gap-3 mt-4 overflow-x-auto">
        {images.map((img) => (
          <img
            key={img}
            src={img}
            alt=""
            onClick={() => setSelected(img)}
            className="
              w-20 h-20
              border
              rounded
              cursor-pointer
              object-cover
            "
          />
        ))}
      </div>
    </div>
  );
}
