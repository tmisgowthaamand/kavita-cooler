import { Wrench, Shield, Clock, Users, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ServicesTeaser = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      icon: Wrench,
      title: "Expert Repairs",
      description: "Factory-trained technicians for all major appliance brands",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Genuine Parts",
      description: "Only authentic spare parts with manufacturer warranty",
      color: "text-success"
    },
    {
      icon: Clock,
      title: "Same Day Service",
      description: "Quick response time with flexible scheduling",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock customer support and emergency services",
      color: "text-destructive"
    }
  ];

  return (
    <section className="section-spacing bg-card">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2>Professional Service You Can Trust</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From installation to maintenance and repairs, our certified technicians provide comprehensive service support for all your home appliances with genuine parts and expert care.
              </p>
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`${service.color} mt-1`}>
                      <IconComponent size={24} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-secondary">{service.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Service CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-gradient group" onClick={() => navigate('/service-booking')}>
                Book Service Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Track My Service
              </Button>
            </div>

            {/* Quick Service Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-primary">2-4 hrs</div>
                <div className="text-sm text-muted-foreground">Average Response Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
                alt="Professional technician servicing appliances"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Service Quality Badge */}
              <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-xl shadow-lg border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-success mb-2">5★</div>
                  <div className="text-sm font-medium text-secondary">Service Rating</div>
                  <div className="text-xs text-muted-foreground">Based on 2,500+ reviews</div>
                </div>
              </div>

              {/* Certified Badge */}
              <div className="absolute -top-8 -right-8 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-lg font-semibold text-center">
                <div className="text-sm">Certified</div>
                <div className="text-xs opacity-90">Technicians</div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Booking Form Preview */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-secondary mb-2">Quick Service Booking</h3>
                <p className="text-muted-foreground">Get your appliances serviced by our expert technicians</p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Appliance Type</label>
                  <select className="w-full p-3 border border-input rounded-lg bg-background">
                    <option>Select appliance</option>
                    <option>Air Conditioner</option>
                    <option>Refrigerator</option>
                    <option>Washing Machine</option>
                    <option>Television</option>
                    <option>Water Heater</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Brand</label>
                  <select className="w-full p-3 border border-input rounded-lg bg-background">
                    <option>Select brand</option>
                    <option>Godrej</option>
                    <option>Panasonic</option>
                    <option>Bosch</option>
                    <option>Siemens</option>
                    <option>Liebherr</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Service Date</label>
                  <input
                    type="date"
                    className="w-full p-3 border border-input rounded-lg bg-background"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <div className="flex items-end">
                  <Button className="w-full btn-gradient" onClick={() => navigate('/service-booking')}>
                    Book Service
                  </Button>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-sm text-muted-foreground">
                  Or call us at <a href="tel:+919876543210" className="text-primary font-medium">+91 98765 43210</a> for immediate assistance
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesTeaser;