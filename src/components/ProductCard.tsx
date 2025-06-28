
import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group cursor-pointer border-0 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg bg-gray-100">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <div className="text-4xl text-gray-500 opacity-60">{product.category === 'men' ? '👔' : product.category === 'women' ? '👗' : '👜'}</div>
          </div>
          
          {/* Overlay Actions */}
          <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex gap-2">
              <Button
                size="icon"
                variant="secondary"
                className="bg-white/90 hover:bg-white text-gray-900 shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(product);
                }}
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className={`shadow-lg ${isLiked ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-white/90 hover:bg-white text-gray-900'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLiked(!isLiked);
                }}
              >
                <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </div>

          {/* Sale Badge */}
          {Math.random() > 0.7 && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              SALE
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2">
              {product.name}
            </h3>
          </div>
          
          <p className="text-sm text-gray-500 capitalize">{product.category}</p>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">
                ${product.price}
              </span>
              {Math.random() > 0.8 && (
                <span className="text-sm text-gray-500 line-through">
                  ${(product.price * 1.3).toFixed(0)}
                </span>
              )}
            </div>
            
            {/* Quick Add Button */}
            <Button
              size="sm"
              className="bg-gray-900 hover:bg-gray-800 text-white transition-all duration-200 hover:scale-105"
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
            >
              Add to Cart
            </Button>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 pt-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`text-xs ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}>
                ★
              </div>
            ))}
            <span className="text-xs text-gray-500 ml-1">(4.2)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
