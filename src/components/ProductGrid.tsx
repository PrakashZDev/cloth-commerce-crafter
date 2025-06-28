
import { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Sample products data
  const products: Product[] = [
    { id: "1", name: "Classic White Shirt", price: 89, image: "", category: "men" },
    { id: "2", name: "Elegant Black Dress", price: 149, image: "", category: "women" },
    { id: "3", name: "Leather Handbag", price: 199, image: "", category: "accessories" },
    { id: "4", name: "Denim Jacket", price: 129, image: "", category: "men" },
    { id: "5", name: "Silk Blouse", price: 109, image: "", category: "women" },
    { id: "6", name: "Designer Sunglasses", price: 79, image: "", category: "accessories" },
    { id: "7", name: "Wool Coat", price: 299, image: "", category: "women" },
    { id: "8", name: "Casual Sneakers", price: 159, image: "", category: "accessories" },
    { id: "9", name: "Premium Suit", price: 499, image: "", category: "men" },
    { id: "10", name: "Summer Maxi Dress", price: 119, image: "", category: "women" },
    { id: "11", name: "Vintage Watch", price: 249, image: "", category: "accessories" },
    { id: "12", name: "Casual Polo", price: 69, image: "", category: "men" }
  ];

  const categories = [
    { id: "all", name: "All Products" },
    { id: "women", name: "Women" },
    { id: "men", name: "Men" },
    { id: "accessories", name: "Accessories" }
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium fashion pieces designed to elevate your everyday style.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gray-900 hover:bg-gray-800 text-white shadow-lg"
                  : "border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 transition-all duration-300"
          >
            Load More Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
