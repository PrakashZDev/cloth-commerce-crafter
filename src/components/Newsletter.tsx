
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4">
              Stay in Style
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and style tips.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white text-gray-900 border-0"
              required
            />
            <Button
              type="submit"
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8"
            >
              Subscribe
            </Button>
          </form>

          {isSubscribed && (
            <div className="text-green-400 font-medium">
              ✅ Thank you for subscribing! Check your email for confirmation.
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold">10%</div>
              <div className="text-sm text-gray-400">First Purchase Discount</div>
            </div>
            <div>
              <div className="text-2xl font-bold">Free</div>
              <div className="text-sm text-gray-400">Shipping Over $100</div>
            </div>
            <div>
              <div className="text-2xl font-bold">30 Days</div>
              <div className="text-sm text-gray-400">Return Policy</div>
            </div>
            <div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm text-gray-400">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
