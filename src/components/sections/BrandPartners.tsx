import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BrandPartners = () => {
  const navigate = useNavigate();

  const brands = [
    {
      name: "Samsung",
      logo: "/samsung logo.png",
      category: "Electronics",
      description: "Leading global technology company offering innovative smartphones, TVs, and home appliances.",
      productCount: 15
    },
    {
      name: "LG",
      logo: "/lg logo.jpg",
      category: "Electronics",
      description: "Premium home appliances and electronics with cutting-edge technology and design.",
      productCount: 12
    },
    {
      name: "Havells",
      logo: "/harvells logo.png",
      category: "Electrical",
      description: "Trusted Indian brand for electrical equipment, fans, and home appliances.",
      productCount: 8
    },
    {
      name: "Bajaj",
      logo: "/bajaj logo.png",
      category: "Home Appliances",
      description: "Iconic Indian brand known for fans, air coolers, and kitchen appliances.",
      productCount: 10
    },
    {
      name: "Orient Electric",
      logo: "/orient logo.png",
      category: "Electrical",
      description: "Leading electrical brand offering fans, lighting, and home appliances.",
      productCount: 7
    },
    {
      name: "Symphony",
      logo: "/symphony logo.png",
      category: "Air Coolers",
      description: "India's largest air cooler manufacturer with innovative cooling solutions.",
      productCount: 5
    },
    {
      name: "Crompton",
      logo: "/crompton logo.png",
      category: "Electrical",
      description: "Premium electrical brand with heritage in fans, lighting, and appliances.",
      productCount: 6
    },
    {
      name: "Voltas",
      logo: "/voltas logo.png",
      category: "Cooling",
      description: "Trusted brand for air conditioners, air coolers, and commercial refrigeration.",
      productCount: 4
    }
  ];

  const handleBrandClick = (brandName: string) => {
    navigate(`/shop?brand=${encodeURIComponent(brandName)}`);
  };

  return (
    <section className="section-spacing bg-gray-50">
      <div className="container-custom">

        <div className="text-center mb-16">
          <h2 className="mb-4">Our Brand Partners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover products from India's most trusted brands, offering quality, reliability, and innovation for your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 cursor-pointer group text-center"
            >
              <CardContent className="p-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow border">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} Logo`}
                    className="max-w-full max-h-full object-contain p-2"
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-secondary text-lg">{brand.name}</h3>
                    <p className="text-sm text-primary font-medium">{brand.category}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {brand.description}
                  </p>
                  <div className="text-sm text-success font-medium">
                    {brand.productCount} Products Available
                  </div>
                  <Button 
                    size="sm"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleBrandClick(brand.name);
                    }}
                    className="w-full btn-gradient hover:scale-105 transition-transform duration-200"
                  >
                    View Products
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
