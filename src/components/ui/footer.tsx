import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceName: string) => {
    // Map service names to appliance types for the booking page
    const serviceMap: { [key: string]: string } = {
      "TV Repair & Installation": "Television",
      "AC Service & Repair": "Air Conditioner", 
      "Refrigerator Service": "Refrigerator",
      "Washing Machine Repair": "Washing Machine",
      "Water Heater Service": "Water Heater",
      "Air Cooler Maintenance": "Air Cooler"
    };
    
    const appliance = serviceMap[serviceName];
    navigate(`/service-booking?service=${encodeURIComponent(appliance)}`);
  };

  const handleBrandClick = (brand: string) => {
    console.log(`Navigating to shop with brand: ${brand}`);
    navigate(`/shop?brand=${encodeURIComponent(brand)}`);
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Kavita Cooler</h3>
            <p className="text-secondary-foreground mb-6 opacity-90">
              Your trusted partner for home appliances and services. Authorized dealers for leading brands with expert technicians and genuine parts.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="bg-transparent border-white/20 hover:bg-white/10">
                <Facebook size={18} />
              </Button>
              <Button variant="outline" size="icon" className="bg-transparent border-white/20 hover:bg-white/10">
                <Instagram size={18} />
              </Button>
              <Button variant="outline" size="icon" className="bg-transparent border-white/20 hover:bg-white/10">
                <Twitter size={18} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Shop Appliances", href: "/shop" },
                { name: "Book Service", href: "/service-booking" },
                { name: "Track Service", href: "/services" },
                { name: "Offers & Deals", href: "/offers" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-secondary-foreground hover:text-white transition-colors opacity-90 hover:opacity-100"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-3">
              {[
                "TV Repair & Installation",
                "AC Service & Repair",
                "Refrigerator Service",
                "Washing Machine Repair",
                "Water Heater Service",
                "Air Cooler Maintenance",
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleServiceClick(service)}
                    className="text-secondary-foreground opacity-90 hover:text-white hover:opacity-100 transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-secondary-foreground opacity-90">
                    123 Electronics Street<br />
                    Tech City, TC 400001
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <div>
                  <p className="text-secondary-foreground opacity-90">+91 98765 43210</p>
                  <p className="text-sm text-secondary-foreground opacity-75">24/7 Service Helpline</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <p className="text-secondary-foreground opacity-90">info@kavitacooler.com</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-secondary-foreground opacity-90">
                    Mon - Sat: 9:00 AM - 8:00 PM<br />
                    Sun: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Authorized Brands */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <h4 className="text-lg font-semibold mb-4 text-white text-center">Authorized Dealer & Service Provider</h4>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-75">
            {["Godrej", "Panasonic", "Bosch", "Siemens", "Liebherr", "V Guard"].map((brand) => (
              <button 
                key={brand} 
                className="text-white font-medium text-sm hover:text-accent hover:opacity-100 transition-colors cursor-pointer"
                onClick={() => handleBrandClick(brand)}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-foreground opacity-75 text-sm">
            © 2025 Kavita Cooler. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/policies/privacy" className="text-secondary-foreground hover:text-white text-sm opacity-75 hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <Link to="/policies/terms" className="text-secondary-foreground hover:text-white text-sm opacity-75 hover:opacity-100 transition-opacity">
              Terms of Service
            </Link>
            <Link to="/policies/returns-warranty" className="text-secondary-foreground hover:text-white text-sm opacity-75 hover:opacity-100 transition-opacity">
              Returns & Warranty
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;