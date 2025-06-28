
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FeaturedCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Women's Collection",
      description: "Elegant and modern pieces for every occasion",
      image: "👗",
      itemCount: "150+ Items"
    },
    {
      id: 2,
      name: "Men's Fashion",
      description: "Sophisticated styles for the modern gentleman",
      image: "👔",
      itemCount: "120+ Items"
    },
    {
      id: 3,
      name: "Accessories",
      description: "Complete your look with our premium accessories",
      image: "👜",
      itemCount: "80+ Items"
    },
    {
      id: 4,
      name: "Seasonal",
      description: "Latest trends for every season",
      image: "🧥",
      itemCount: "60+ Items"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated collections designed to match your unique style and personality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={category.id}
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.image}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {category.description}
                </p>
                <div className="text-sm text-gray-500 mb-4">
                  {category.itemCount}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300"
                >
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
