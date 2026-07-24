const products = [
  {
    id: 1,
    title: "Sports T-Shirt",
    image: "/products/r1.jpg",
    price: 499,
  },
  {
    id: 2,
    title: "Gym Shorts",
    image: "/products/r2.jpg",
    price: 599,
  },
  {
    id: 3,
    title: "Running Shoes",
    image: "/products/r3.jpg",
    price: 1499,
  },
  {
    id: 4,
    title: "Trackpant",
    image: "/products/r4.jpg",
    price: 899,
  },
];

export default function RelatedProducts() {
  return (
    <section className="mt-20">
      <h2 className="text-2xl font-bold mb-6">Similar Products</h2>

      <div
        className="
        grid
        grid-cols-2
        md:grid-cols-4
        gap-6
        "
      >
        {products.map((item) => (
          <div
            key={item.id}
            className="
            border
            rounded-lg
            overflow-hidden
            "
          >
            <img
              src={item.image}
              alt=""
              className="
              w-full
              h-60
              object-cover
              "
            />

            <div className="p-4">
              <h3>{item.title}</h3>

              <p className="font-bold mt-2">₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
