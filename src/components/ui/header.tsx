import { useState } from "react";
import { Search, ShoppingCart, Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/hooks/use-cart";
import { useNavigate, useLocation } from "react-router-dom";
import CartDropdown from "@/components/ui/cart-dropdown";
import SearchBox from "@/components/ui/search-box";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Sample products data for search
  const products = [
    {
      id: 1,
      name: "Godrej 1.5 Ton 5 Star Split AC",
      brand: "Godrej",
      category: "Air Conditioner",
      price: 35999,
      image: "/godrej.jpg"
    },
    {
      id: 2,
      name: "Bosch 345L Double Door Refrigerator",
      brand: "Bosch",
      category: "Refrigerator",
      price: 52999,
      image: "/bosch ref.jpg"
    },
    {
      id: 3,
      name: "Samsung 7kg Front Load Washing Machine",
      brand: "Samsung",
      category: "Washing Machine",
      price: 34999,
      image: "/samsung washing.jpg"
    },
    {
      id: 4,
      name: "LG 55 inch 4K Smart TV",
      brand: "LG",
      category: "Television",
      price: 49999,
      image: "/lg.jpg"
    },
    {
      id: 5,
      name: "Panasonic 1.5 Ton Inverter AC",
      brand: "Panasonic",
      category: "Air Conditioner",
      price: 32999,
      image: "/panasonic.jpg"
    }
  ];

  const handleSearch = (query: string) => {
    navigate(`/shop?search=${encodeURIComponent(query)}`);
  };

  const handleProductSelect = (product: any) => {
    navigate(`/product/${product.id}`);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Services", href: "/services" },
    { name: "Brands", href: "/brands" },
    { name: "Offers", href: "/offers" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md border-b shadow-lg transition-all duration-300">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-2 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="container-custom flex justify-between items-center text-sm relative z-10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
              <Phone size={14} className="animate-pulse" />
              <span>+91 98765 43210</span>
            </div>
            <div className="hidden md:flex items-center gap-2 hover:scale-105 transition-transform duration-200">
              <MapPin size={14} className="animate-bounce" />
              <span>Authorized Dealer & Service Center</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="animate-pulse">Free Installation • Genuine Parts • Expert Service</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="/" 
              className="flex items-center gap-3 hover:opacity-90 transition-all duration-300 hover:scale-105 transform"
            >
              <img 
                src="/kavita logo.png" 
                alt="Kavita Cooler Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Kavita Cooler
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href || 
                (item.href !== '/' && location.pathname.startsWith(item.href));
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 font-medium rounded-lg transition-all duration-300 group ${
                    isActive 
                      ? 'text-primary bg-primary/10 shadow-md' 
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : ''
                  }`}></div>
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                    isActive ? 'w-full' : ''
                  }`}></div>
                </a>
              );
            })}
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <SearchBox
                onSearch={handleSearch}
                onProductSelect={handleProductSelect}
                products={products}
                className="w-80 transition-all duration-300 hover:scale-105"
              />
            </div>
            
            <div className="hover:scale-110 transition-transform duration-200">
              <CartDropdown />
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button 
                  variant="outline" 
                  size="icon"
                  className="hover:scale-110 transition-transform duration-200 hover:bg-primary/10 border-primary/20"
                >
                  <Menu size={20} className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card/95 backdrop-blur-md">
                <div className="flex flex-col gap-6 pt-6">
                  <SearchBox
                    onSearch={handleSearch}
                    onProductSelect={handleProductSelect}
                    products={products}
                    className="w-full"
                  />
                  
                  <nav className="flex flex-col space-y-2">
                    {navItems.map((item, index) => {
                      const isActive = location.pathname === item.href || 
                        (item.href !== '/' && location.pathname.startsWith(item.href));
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className={`relative px-4 py-3 font-medium rounded-lg transition-all duration-300 transform hover:scale-105 ${
                            isActive 
                              ? 'text-primary bg-primary/10 shadow-md border-l-4 border-primary' 
                              : 'text-foreground hover:text-primary hover:bg-primary/5 hover:border-l-4 hover:border-primary/50'
                          }`}
                          onClick={() => setIsOpen(false)}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <span className="relative z-10">{item.name}</span>
                          <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-transparent opacity-0 transition-opacity duration-300 ${
                            isActive ? 'opacity-100' : 'group-hover:opacity-100'
                          }`}></div>
                        </a>
                      );
                    })}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;