import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const Pricing = () => {
  const pricingData = [
    {
      service: "2D Floor Plans",
      elegance: { included: true, note: "Limited" },
      elite: { included: true, note: "Limited" },
    },
    {
      service: "3D Elevation Renderings",
      elegance: { included: true, note: "Professional drafting" },
      elite: { included: true, note: "Enhanced quality" },
    },
    {
      service: "Architectural & Structural Drawings",
      elegance: { included: true, note: "Extra detailed" },
      elite: { included: true, note: "Extra detailed" },
    },
    {
      service: "Kitchen, Bath, Plumbing, Interiors",
      elegance: { included: true, note: "" },
      elite: { included: true, note: "Premium materials" },
    },
    {
      service: "Doors, Windows, Painting, Flooring",
      elegance: { included: true, note: "" },
      elite: { included: true, note: "Upgraded finishes" },
    },
    {
      service: "Premium Steel & Aggregates",
      elegance: { included: false, note: "" },
      elite: { included: true, note: "Top-end brand grade" },
    },
    {
      service: "Consultation & Design Customization",
      elegance: { included: false, note: "" },
      elite: { included: true, note: "1 Week rollover period" },
    },
    {
      service: "High-Res 3D Visuals",
      elegance: { included: true, note: "Online preview for decision making" },
      elite: { included: false, note: "" },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Full-width Brown Header Strip */}
      <div className="w-full aakaara-brown py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-6 font-quicksand">
            Pricing Plans
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Choose the perfect package for your architectural and design needs. We offer
            comprehensive solutions tailored to your requirements.
          </p>
        </div>
      </div>

      {/* Pricing Content */}
      <div className="py-16 bg-aakaara-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Pricing Table Header */}
              <div className="aakaara-brown text-white">
                <div className="grid grid-cols-3 gap-4 p-6">
                  <div className="font-semibold text-lg">Deliverables</div>
                  <div className="text-center">
                    <div className="font-semibold text-lg">Elegance</div>
                    <div className="text-sm opacity-90">(₹1,779)</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-lg">Elite</div>
                    <div className="text-sm opacity-90">(₹2,249)</div>
                  </div>
                </div>
              </div>

              {/* Pricing Table Body */}
              <div className="divide-y divide-gray-200">
                {pricingData.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="font-medium text-gray-700">{item.service}</div>
                    <div className="text-center">
                      {item.elegance.included ? (
                        <Check className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-gray-300 mx-auto" />
                      )}
                      {item.elegance.note && (
                        <div className="text-sm text-gray-500 mt-1">({item.elegance.note})</div>
                      )}
                    </div>
                    <div className="text-center">
                      {item.elite.included ? (
                        <Check className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-gray-300 mx-auto" />
                      )}
                      {item.elite.note && (
                        <div className="text-sm text-gray-500 mt-1">({item.elite.note})</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-aakaara-text mb-8">
                Ready to start your project? Contact us for a personalized consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="aakaara-brown text-white px-8 py-3 font-semibold hover:bg-primary/90">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-aakaara-brown text-aakaara-brown px-8 py-3 font-semibold hover:bg-aakaara-brown hover:text-white"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
