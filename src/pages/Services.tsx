import { useState } from "react";
import { Tv, Wind, Refrigerator, WashingMachine, Zap, Fan, Droplets, Clock, Shield, Users, Phone, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from '@/components/ui/badge';
import { Star, Wrench, ArrowLeft } from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const services = [
    {
      icon: Tv,
      name: "Television",
      description: "Complete TV repair and installation services",
      services: ["Screen repair", "Sound issues", "Remote problems", "Wall mounting"],
      price: "Starting from ₹299"
    },
    {
      icon: Wind,
      name: "Air Conditioner",
      description: "AC installation, service, and repair by experts",
      services: ["Installation", "Gas refilling", "Cleaning", "Compressor repair"],
      price: "Starting from ₹499"
    },
    {
      icon: Refrigerator,
      name: "Refrigerator",
      description: "Fridge repair and maintenance services",
      services: ["Cooling issues", "Thermostat repair", "Door seal replacement", "Defrosting"],
      price: "Starting from ₹399"
    },
    {
      icon: WashingMachine,
      name: "Washing Machine",
      description: "Complete washing machine repair and service",
      services: ["Drum repair", "Motor replacement", "Water leakage", "Spin cycle issues"],
      price: "Starting from ₹349"
    },
    {
      icon: Zap,
      name: "Water Heater",
      description: "Geyser installation and repair services",
      services: ["Element replacement", "Thermostat repair", "Installation", "Safety valve"],
      price: "Starting from ₹249"
    },
    {
      icon: Fan,
      name: "Fan",
      description: "Ceiling and table fan repair services",
      services: ["Motor repair", "Blade balancing", "Speed control", "Installation"],
      price: "Starting from ₹199"
    },
    {
      icon: Droplets,
      name: "Air Cooler",
      description: "Air cooler maintenance and repair",
      services: ["Pump replacement", "Pad cleaning", "Motor service", "Water level issues"],
      price: "Starting from ₹299"
    }
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: "Certified Technicians",
      description: "Factory-trained professionals with years of experience"
    },
    {
      icon: Shield,
      title: "Genuine Parts",
      description: "Only authentic spare parts with manufacturer warranty"
    },
    {
      icon: Clock,
      title: "Doorstep Service",
      description: "Convenient home visits at your preferred time"
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Round-the-clock customer support and emergency services"
    }
  ];

  const brands = ["Godrej", "Panasonic", "Bosch", "Siemens", "Liebherr", "V Guard", "Samsung", "LG", "Whirlpool"];

  const handleBookService = (serviceName: string) => {
    navigate(`/service-booking?service=${encodeURIComponent(serviceName)}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Back Button */}
        <div className="container mx-auto px-4 pt-8 pb-4">
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

        {/* Hero Section */}
        <section className="gradient-hero section-spacing">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1>Expert Appliance Services</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Professional repair and maintenance services for all your home appliances. 
                  Certified technicians, genuine parts, and doorstep service guaranteed.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">2-4 hrs</div>
                    <div className="text-sm text-muted-foreground">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="btn-gradient" onClick={() => navigate('/service-booking')}>
                    Book Service Now
                  </Button>
                  <Button size="lg" variant="outline">
                    <Phone className="mr-2 h-4 w-4" />
                    Call +91 98765 43210
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
                  alt="Professional technician"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive repair and maintenance services for all major home appliances
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="card-hover group">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        <ul className="space-y-2">
                          {service.services.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="pt-4 border-t">
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-medium text-accent">{service.price}</span>
                            <span className="text-sm text-muted-foreground">+ taxes</span>
                          </div>
                          <Button 
                            className="w-full"
                            onClick={() => handleBookService(service.name)}
                          >
                            Book Service
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-spacing bg-muted/30">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="mb-4">Why Choose Kavita Cooler Services?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional expertise, quality service, and customer satisfaction guaranteed
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Service Booking Form */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Book Your Service</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and our technician will contact you within 2 hours
                  </p>
                </CardHeader>
                
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Full Name *</label>
                        <Input placeholder="Enter your full name" required />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Phone Number *</label>
                        <Input placeholder="+91 98765 43210" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Appliance Type *</label>
                        <Select value={selectedService} onValueChange={setSelectedService}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select appliance" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.name} value={service.name}>
                                {service.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Brand *</label>
                        <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select brand" />
                          </SelectTrigger>
                          <SelectContent>
                            {brands.map((brand) => (
                              <SelectItem key={brand} value={brand}>
                                {brand}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Preferred Date</label>
                        <Input
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Preferred Time</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                            <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Issue Description</label>
                      <Textarea
                        placeholder="Describe the problem you're facing with your appliance..."
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Address *</label>
                      <Textarea
                        placeholder="Enter your complete address..."
                        rows={3}
                        required
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button type="submit" size="lg" className="btn-gradient flex-1">
                        Book Service Now
                      </Button>
                      <Button type="button" size="lg" variant="outline">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Instead
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Track Service CTA */}
        <section className="section-spacing bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-white mb-4">Already Booked a Service?</h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Track your service request status and get real-time updates on technician arrival
            </p>
            <Button size="lg" variant="secondary">
              Track My Service
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;