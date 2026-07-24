export default function ProductDescription() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Product Description</h2>

      <p className="text-gray-700 leading-7">
        Comfortable gym trackpants designed for training, walking and daily use.
      </p>

      <div className="mt-8">
        <h3 className="font-bold text-xl mb-4">Features</h3>

        <ul className="list-disc pl-6 space-y-2">
          <li>Quick Dry Fabric</li>
          <li>Stretchable Material</li>
          <li>Lightweight Design</li>
          <li>Machine Washable</li>
        </ul>
      </div>
    </section>
  );
}
