import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Compass, Palette, Sprout } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Full-width Brown Header Strip */}
      <div className="w-full aakaara-brown py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight font-quicksand">
            Crafting<br />
            Inspired<br />
            Spaces
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Transforming visions into architectural masterpieces that inspire, endure, and elevate everyday living.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 bg-aakaara-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-aakaara-text mb-4">
              Our Services
            </h2>
            <p className="text-lg text-aakaara-text max-w-3xl mx-auto">
              Comprehensive architectural solutions tailored to inspire, endure, and elevate everyday living
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/50 rounded-lg backdrop-blur-sm">
              <div className="w-16 h-16 bg-aakaara-brown/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Compass className="w-8 h-8 text-aakaara-brown" />
              </div>
              <h3 className="text-xl font-semibold text-aakaara-brown mb-2">Architecture</h3>
              <p className="text-aakaara-text">
                Innovative architectural solutions tailored to your vision
              </p>
            </div>

            <div className="text-center p-6 bg-white/50 rounded-lg backdrop-blur-sm">
              <div className="w-16 h-16 bg-aakaara-brown/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Palette className="w-8 h-8 text-aakaara-brown" />
              </div>
              <h3 className="text-xl font-semibold text-aakaara-brown mb-2">Interior Design</h3>
              <p className="text-aakaara-text">
                Creating spaces that reflect your personality and lifestyle
              </p>
            </div>

            <div className="text-center p-6 bg-white/50 rounded-lg backdrop-blur-sm">
              <div className="w-16 h-16 bg-aakaara-brown/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Sprout className="w-8 h-8 text-aakaara-brown" />
              </div>
              <h3 className="text-xl font-semibold text-aakaara-brown mb-2">Landscape Design</h3>
              <p className="text-aakaara-text">
                Harmonizing natural beauty with architectural excellence
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about">
                <Button className="aakaara-brown text-white px-8 py-3 font-semibold hover:bg-primary/90">
                  Learn More About Us
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  variant="outline"
                  className="border-2 border-aakaara-brown text-aakaara-brown px-8 py-3 font-semibold hover:bg-aakaara-brown hover:text-white"
                >
                  View Our Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
