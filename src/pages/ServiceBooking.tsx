import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Phone, Mail, MapPin, Wrench } from "lucide-react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { useToast } from "@/hooks/use-toast";

const ServiceBooking = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    appliance: "",
    brand: "",
    model: "",
    issue: "",
    preferredDate: "",
    preferredTime: ""
  });

  // Pre-select service from URL parameter
  useEffect(() => {
    const serviceFromUrl = searchParams.get('service');
    if (serviceFromUrl) {
      setFormData(prev => ({
        ...prev,
        appliance: serviceFromUrl
      }));
    }
  }, [searchParams]);

  const serviceTypes = [
    "Installation",
    "Repair",
    "Maintenance",
    "Warranty Service",
    "Annual Maintenance Contract"
  ];

  const appliances = [
    "Television",
    "Air Conditioner",
    "Refrigerator", 
    "Washing Machine",
    "Water Heater",
    "Fan",
    "Air Cooler"
  ];

  const brands = [
    "Godrej", "Panasonic", "Bosch", "Siemens", "Liebherr", "V Guard", "LG", 
    "Kent", "Aquaguard", "Pureit", "Havells", "Blue Star", "Orient Electric", 
    "Crompton", "Bajaj", "Usha", "Symphony", "Voltas"
  ];

  const timeSlots = [
    "9:00 AM - 12:00 PM",
    "12:00 PM - 3:00 PM", 
    "3:00 PM - 6:00 PM",
    "6:00 PM - 9:00 PM"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Form submitted with data:", formData);
    
    // Basic validation - only require essential fields
    if (!formData.name || !formData.phone || !formData.appliance || !formData.address) {
      console.log("Validation failed:", {
        name: formData.name,
        phone: formData.phone,
        appliance: formData.appliance,
        address: formData.address
      });
      
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields: Name, Phone, Appliance, and Address.",
        variant: "destructive"
      });
      return;
    }

    console.log("Validation passed, showing success toast");
    
    // Simulate booking submission with more detailed success message
    const serviceTypeText = formData.serviceType ? `${formData.serviceType.toLowerCase()} ` : '';
    toast({
      title: "Service Booked Successfully!",
      description: `Your ${serviceTypeText}service for ${formData.appliance} has been scheduled. Our team will contact you within 2 hours to confirm the appointment.`,
    });

    console.log("Success toast shown, resetting form");

    // Reset form but keep the pre-selected appliance if it came from URL
    const serviceFromUrl = searchParams.get('service');
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      serviceType: "",
      appliance: serviceFromUrl || "",
      brand: "",
      model: "",
      issue: "",
      preferredDate: "",
      preferredTime: ""
    });
    
    console.log("Form reset complete");
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-primary">Home</a>
          <span>/</span>
          <span className="text-foreground">Service Booking</span>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">Quick Service Booking</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book professional service for your home appliances. Our expert technicians provide reliable installation, repair, and maintenance services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Service Booking Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="w-5 h-5" />
                Service Request Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Customer Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-secondary">Customer Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Service Address *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder="Enter complete address where service is required"
                      rows={3}
                      required
                    />
                  </div>
                </div>

                {/* Service Details */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-secondary">Service Details</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="serviceType">Service Type *</Label>
                      <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="appliance">Appliance *</Label>
                      <Select value={formData.appliance} onValueChange={(value) => handleInputChange("appliance", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select appliance" />
                        </SelectTrigger>
                        <SelectContent>
                          {appliances.map((appliance) => (
                            <SelectItem key={appliance} value={appliance}>{appliance}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="brand">Brand</Label>
                      <Select value={formData.brand} onValueChange={(value) => handleInputChange("brand", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select brand" />
                        </SelectTrigger>
                        <SelectContent>
                          {brands.map((brand) => (
                            <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="model">Model Number</Label>
                      <Input
                        id="model"
                        value={formData.model}
                        onChange={(e) => handleInputChange("model", e.target.value)}
                        placeholder="Enter model number"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="issue">Issue Description</Label>
                    <Textarea
                      id="issue"
                      value={formData.issue}
                      onChange={(e) => handleInputChange("issue", e.target.value)}
                      placeholder="Describe the issue or service requirement"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Scheduling */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-secondary">Preferred Schedule</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Button 
                  type="button" 
                  className="w-full" 
                  size="lg"
                  onClick={handleSubmit}
                >
                  Book Service Now
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Service Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <div>
                    <p className="font-medium">Service Helpline</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-muted-foreground">service@kavitacooler.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-primary" />
                  <div>
                    <p className="font-medium">Service Hours</p>
                    <p className="text-muted-foreground">Mon-Sat: 9 AM - 9 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Installation Services</p>
                      <p className="text-sm text-muted-foreground">Professional installation with warranty</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Repair & Maintenance</p>
                      <p className="text-sm text-muted-foreground">Expert diagnosis and genuine parts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">AMC Services</p>
                      <p className="text-sm text-muted-foreground">Annual maintenance contracts available</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Emergency Support</p>
                      <p className="text-sm text-muted-foreground">24/7 emergency service available</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-primary/10 to-accent/10">
              <CardContent className="p-6">
                <div className="text-center">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-secondary mb-2">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">
                    Same-day service available for urgent requests. Our technicians are factory-trained and certified.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceBooking;
