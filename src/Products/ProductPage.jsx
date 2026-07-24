import Breadcrumb from "@/components/product/Breadcrumb";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductDescription from "@/components/product/ProductDescription";
import RelatedProducts from "@/components/product/RelatedProducts";

export default function ProductPage() {
  const product = {
    id: 1,
    name: "Men Gym Trackpants",
    brand: "SPORTSFANDA",
    rating: 4.5,
    reviews: 512,
    price: 899,
    mrp: 1499,
    images: [
      "/products/product1.jpg",
      "/products/product2.jpg",
      "/products/product3.jpg",
      "/products/product4.jpg",
    ],
    colors: ["Black", "Grey", "Navy"],
    sizes: ["S", "M", "L", "XL"],
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <Breadcrumb />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <ProductGallery images={product.images} />
        <ProductInfo product={product} />
      </div>

      <ProductDescription />

      <RelatedProducts />
    </main>
  );
}
