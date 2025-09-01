import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tv, Wind, Refrigerator, WashingMachine, Zap, Fan, Snowflake } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OurServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      name: "Television",
      icon: Tv,
      description: "Complete TV repair and installation services",
      services: ["Screen repair", "Sound issues", "Remote problems", "Wall mounting"],
      price: "Starting from ₹299+ taxes",
      category: "Television"
    },
    {
      name: "Air Conditioner", 
      icon: Wind,
      description: "AC installation, service, and repair by experts",
      services: ["Installation", "Gas refilling", "Cleaning", "Compressor repair"],
      price: "Starting from ₹499+ taxes",
      category: "Air Conditioner"
    },
    {
      name: "Refrigerator",
      icon: Refrigerator,
      description: "Fridge repair and maintenance services",
      services: ["Cooling issues", "Thermostat repair", "Door seal replacement", "Defrosting"],
      price: "Starting from ₹399+ taxes",
      category: "Refrigerator"
    },
    {
      name: "Washing Machine",
      icon: WashingMachine,
      description: "Complete washing machine repair and service",
      services: ["Drum repair", "Motor replacement", "Water leakage", "Spin cycle issues"],
      price: "Starting from ₹349+ taxes",
      category: "Washing Machine"
    },
    {
      name: "Water Heater",
      icon: Zap,
      description: "Geyser installation and repair services",
      services: ["Element replacement", "Thermostat repair", "Installation", "Safety valve"],
      price: "Starting from ₹249+ taxes",
      category: "Water Heater"
    },
    {
      name: "Fan",
      icon: Fan,
      description: "Ceiling and table fan repair services",
      services: ["Motor repair", "Blade balancing", "Speed control", "Installation"],
      price: "Starting from ₹199+ taxes",
      category: "Fan"
    },
    {
      name: "Air Cooler",
      icon: Snowflake,
      description: "Air cooler maintenance and repair",
      services: ["Pump replacement", "Pad cleaning", "Motor service", "Water level issues"],
      price: "Starting from ₹299+ taxes",
      category: "Air Cooler"
    }
  ];

  const handleBookService = (serviceName: string) => {
    navigate(`/service-booking?service=${encodeURIComponent(serviceName)}`);
  };

  return (
    <section className="section-spacing bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional repair and maintenance services for all your home appliances by certified technicians.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 h-full"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-lg">{service.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col justify-between h-full min-h-[350px]">
                  <div className="flex-1">
                    <p className="text-muted-foreground mb-4 text-sm">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.services.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-3 mt-auto">
                    <div className="text-lg font-semibold text-primary text-center">
                      {service.price}
                    </div>
                    <Button 
                      onClick={() => handleBookService(service.name)}
                      className="w-full"
                      size="sm"
                    >
                      Book Service
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Service Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="font-semibold text-secondary mb-2">Expert Technicians</h3>
            <p className="text-sm text-muted-foreground">
              Factory-trained and certified professionals with years of experience
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold text-secondary mb-2">Quick Response</h3>
            <p className="text-sm text-muted-foreground">
              Same-day service available with 24/7 emergency support
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✅</span>
            </div>
            <h3 className="font-semibold text-secondary mb-2">Genuine Parts</h3>
            <p className="text-sm text-muted-foreground">
              Only original manufacturer parts with warranty coverage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
