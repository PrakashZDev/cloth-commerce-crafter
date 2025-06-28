
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-[70vh] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Elevate Your
                <span className="block bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                  Style
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-md">
                Discover our latest collection of premium fashion pieces crafted for the modern individual.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
              >
                Shop Collection
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 text-lg transition-all duration-300"
              >
                View Lookbook
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Premium Items</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-full flex items-center justify-center">
            <div className="relative w-80 h-96 lg:w-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl text-gray-600 opacity-50">👔</div>
              </div>
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-10 left-10 bg-white rounded-full p-4 shadow-lg animate-bounce">
              <div className="text-2xl">✨</div>
            </div>
            <div className="absolute bottom-10 right-10 bg-white rounded-full p-4 shadow-lg animate-pulse">
              <div className="text-2xl">💎</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #000 2px, transparent 2px), radial-gradient(circle at 75% 75%, #000 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </section>
  );
};

export default Hero;
