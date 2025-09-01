import { Tv, Wind, Refrigerator, WashingMachine, Zap, Fan, Droplets, Droplet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  
  const categories = [
    {
      name: "Television",
      icon: Tv,
      category: "Television",
      image: "/panasonic tv.jpg"
    },
    {
      name: "Air Conditioner", 
      icon: Wind,
      category: "Air Conditioner",
      image: "/panasonic.jpg"
    },
    {
      name: "Refrigerator",
      icon: Refrigerator,
      category: "Refrigerator",
      image: "/godrej.jpg"
    },
    {
      name: "Washing Machine",
      icon: WashingMachine,
      category: "Washing Machine",
      image: "/Godrej washing.jpg"
    },
    {
      name: "Water Heater",
      icon: Zap,
      category: "Water Heater",
      image: "/crompton wh.jpg"
    },
    {
      name: "Water Purifier",
      icon: Droplet,
      category: "Water Purifier",
      image: "/aqua wf.jpg"
    },
    {
      name: "Fan",
      icon: Fan,
      category: "Fan",
      image: "/havells fan.jpg"
    },
    {
      name: "Air Cooler",
      icon: Droplets,
      category: "Air Cooler",
      image: "/symphony air.jpg"
    }
  ];

  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Shop by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of premium home appliances from trusted brands. Professional installation and service included.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                className="group block cursor-pointer"
                onClick={() => navigate(`/shop?category=${encodeURIComponent(category.category)}`)}
              >
                <Card className="card-hover overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Category Icon */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    
                    {/* Category Info */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold">{category.name}</h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary group-hover:text-accent transition-colors">
                        View Products
                      </span>
                      <span className="text-xs text-muted-foreground">
                        From ₹5,999
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* View All Categories */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/shop')}
            className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors"
          >
            View All Categories
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;