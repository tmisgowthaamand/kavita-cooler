import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BrandShowcase = () => {
  const navigate = useNavigate();

  const brands = [
    {
      name: "Godrej",
      logo: "/godrej logo.jpg",
      description: "Premium appliances with innovative technology"
    },
    {
      name: "Panasonic", 
      logo: "/panasonic logo.png",
      description: "Japanese quality and reliability"
    },
    {
      name: "Bosch",
      logo: "/bosch logo.png", 
      description: "German engineering excellence"
    },
    {
      name: "Siemens",
      logo: "/siemens logo.png",
      description: "Advanced technology solutions"
    },
    {
      name: "Liebherr", 
      logo: "/liebherr logo.png",
      description: "Premium refrigeration technology"
    },
    {
      name: "V Guard",
      logo: "/v guard logo.png",
      description: "Complete protection solutions"
    },
    {
      name: "LG",
      logo: "/lg logo.jpg",
      description: "Life's Good with innovative appliances"
    }
  ];

  const handleBrandClick = (brandName: string) => {
    navigate(`/shop?brand=${encodeURIComponent(brandName)}`);
  };

  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Authorized Brand Partners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are proud authorized dealers and service providers for leading global appliance brands, ensuring genuine products and expert support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-7xl mx-auto">
          {brands.map((brand, index) => (
            <Card 
              key={brand.name}
              className="card-hover text-center hover:shadow-lg transition-all duration-300 cursor-pointer group w-full"
            >
              <CardContent className="p-4 flex flex-col justify-between h-full min-h-[300px]">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-16 h-16 rounded-lg bg-white shadow-sm border flex items-center justify-center p-2">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-bold text-secondary mb-1">{brand.name}</h3>
                    <p className="text-xs text-muted-foreground leading-tight px-1">
                      {brand.description}
                    </p>
                  </div>
                </div>
                <div className="mt-auto pt-3">
                  <Button 
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleBrandClick(brand.name);
                    }}
                    className="w-full text-xs px-1 py-2 h-auto leading-tight"
                  >
                    View All Products
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Message */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-secondary mb-4">
              Why Choose Our Authorized Partners?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-2">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-4 h-4 text-success-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="font-medium text-secondary">Genuine Products</div>
                <div className="text-muted-foreground">100% authentic products with manufacturer warranty</div>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-4 h-4 text-success-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="font-medium text-secondary">Expert Service</div>
                <div className="text-muted-foreground">Factory-trained technicians with genuine spare parts</div>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-4 h-4 text-success-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="font-medium text-secondary">Full Support</div>
                <div className="text-muted-foreground">Complete after-sales support and extended warranties</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;