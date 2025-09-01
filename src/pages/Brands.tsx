import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/ui/footer";

const Brands = () => {
  const navigate = useNavigate();

  const brands = [
    {
      name: "Samsung",
      category: "Electronics",
      products: 15,
      description: "Leading global technology company offering innovative smartphones, TVs, and home appliances.",
      logo: "/samsung logo.png"
    },
    {
      name: "LG",
      category: "Electronics", 
      products: 12,
      description: "Premium home appliances and electronics with cutting-edge technology and design.",
      logo: "/lg logo.jpg"
    },
    {
      name: "Havells",
      category: "Electrical",
      products: 8,
      description: "Trusted Indian brand for electrical equipment, fans, and home appliances.",
      logo: "/harvells logo.png"
    },
    {
      name: "Bajaj",
      category: "Home Appliances",
      products: 10,
      description: "Iconic Indian brand known for fans, air coolers, and kitchen appliances.",
      logo: "/bajaj logo.png"
    },
    {
      name: "Orient Electric",
      category: "Electrical",
      products: 7,
      description: "Leading electrical brand offering fans, lighting, and home appliances.",
      logo: "/orient logo.png"
    },
    {
      name: "Symphony",
      category: "Air Coolers",
      products: 5,
      description: "India's largest air cooler manufacturer with innovative cooling solutions.",
      logo: "/symphony logo.png"
    },
    {
      name: "Crompton",
      category: "Electrical",
      products: 6,
      description: "Premium electrical brand with heritage in fans, lighting, and appliances.",
      logo: "/crompton logo.png"
    },
    {
      name: "Voltas",
      category: "Cooling",
      products: 4,
      description: "Trusted brand for air conditioners, air coolers, and commercial refrigeration.",
      logo: "/voltas logo.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 hover:bg-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-secondary">Our Brands</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our curated collection of trusted brands offering quality products across electronics, home appliances, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group h-full flex flex-col">
                <CardHeader className="text-center flex-shrink-0 pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow border">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} Logo`}
                      className="max-w-full max-h-full object-contain p-2"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-secondary">{brand.name}</CardTitle>
                  <Badge variant="secondary" className="mt-2">{brand.category}</Badge>
                </CardHeader>
                <CardContent className="text-center flex flex-col flex-grow space-y-4 pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {brand.description}
                  </p>
                  <div className="text-sm font-medium text-success">
                    {brand.products} Products Available
                  </div>
                  <Button 
                    className="w-full btn-gradient hover:scale-105 transition-transform duration-200 mt-auto"
                    onClick={() => navigate(`/shop?brand=${encodeURIComponent(brand.name)}`)}
                  >
                    View Products
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Brands;
