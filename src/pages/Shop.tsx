import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Star, Search, SlidersHorizontal, Grid3X3, List, Filter, Heart, ShoppingCart, ArrowLeft } from 'lucide-react';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import '../styles/product-grid.css';

const Shop = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      brand: product.brand
    });
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('');
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [showEMIOnly, setShowEMIOnly] = useState(false);

  const categories = [
    "Air Conditioner", "Refrigerator", "Washing Machine", "Television", "Water Heater", "Water Purifier", "Fan", "Air Cooler"
  ];

  const brands = [
    "Godrej", "Panasonic", "Bosch", "Siemens", "Liebherr", "V Guard", "Kent", "Aquaguard", "Pureit", "Havells", "Blue Star", "Orient Electric", "Crompton", "Bajaj", "Usha", "Symphony", "Voltas"
  ];

  const allProducts = [
    {
      id: 1,
      name: "Godrej 1.5 Ton 5 Star Split AC",
      brand: "Godrej",
      category: "Air Conditioner",
      price: 35999,
      originalPrice: 42999,
      rating: 4.5,
      reviews: 234,
      image: "/godrej.jpg",
      inStock: true,
      emi: 3000
    },
    {
      id: 3,
      name: "Liebherr 265L Double Door Refrigerator",
      brand: "Liebherr",
      category: "Refrigerator",
      price: 58999,
      originalPrice: 65999,
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=400&q=80",
      inStock: false,
      emi: 4917
    },
    {
      id: 4,
      name: "Panasonic 55\" 4K Smart LED TV",
      brand: "Panasonic",
      category: "Television",
      price: 45999,
      originalPrice: 52999,
      rating: 4.4,
      reviews: 298,
      image: "/panasonic tv.jpg",
      inStock: true,
      emi: 3833
    },
    {
      id: 8,
      name: "Panasonic 1.5 Ton 3 Star Inverter Split AC",
      brand: "Panasonic",
      category: "Air Conditioner",
      price: 32999,
      originalPrice: 38999,
      rating: 4.3,
      reviews: 189,
      image: "/panasonic.jpg",
      inStock: true,
      emi: 2750
    },
    {
      id: 9,
      name: "LG 1.5 Ton 5 Star Dual Inverter Split AC",
      brand: "LG",
      category: "Air Conditioner",
      price: 38999,
      originalPrice: 45999,
      rating: 4.6,
      reviews: 312,
      image: "/lg.jpg",
      inStock: true,
      emi: 3250
    },
    {
      id: 10,
      name: "Samsung 1.5 Ton 3 Star Inverter Split AC",
      brand: "Samsung",
      category: "Air Conditioner",
      price: 34999,
      originalPrice: 41999,
      rating: 4.4,
      reviews: 267,
      image: "/samsung.jpg",
      inStock: true,
      emi: 2917
    },
    {
      id: 11,
      name: "Bosch 7 Kg 5 Star Front Load Washing Machine",
      brand: "Bosch",
      category: "Washing Machine",
      price: 34999,
      originalPrice: 41999,
      rating: 4.6,
      reviews: 156,
      image: "/bosch wahsing.jpg",
      inStock: true,
      emi: 2917
    },
    {
      id: 12,
      name: "LG 7 Kg 5 Star Front Load Washing Machine",
      brand: "LG",
      category: "Washing Machine",
      price: 29999,
      originalPrice: 35999,
      rating: 4.5,
      reviews: 267,
      image: "/lg washing.jpg",
      inStock: true,
      emi: 2500
    },
    {
      id: 13,
      name: "Panasonic 8 Kg 5 Star Front Load Washing Machine",
      brand: "Panasonic",
      category: "Washing Machine",
      price: 32999,
      originalPrice: 38999,
      rating: 4.4,
      reviews: 198,
      image: "/panasonic washing.jpg",
      inStock: true,
      emi: 2750
    },
    {
      id: 14,
      name: "Samsung 6.5 Kg 5 Star Top Load Washing Machine",
      brand: "Samsung",
      category: "Washing Machine",
      price: 21999,
      originalPrice: 26999,
      rating: 4.3,
      reviews: 189,
      image: "/samsung washing.jpg",
      inStock: true,
      emi: 1833
    },
    {
      id: 15,
      name: "Siemens 8 Kg 5 Star Front Load Washing Machine",
      brand: "Siemens",
      category: "Washing Machine",
      price: 39999,
      originalPrice: 47999,
      rating: 4.5,
      reviews: 134,
      image: "/siemens washing.jpg",
      inStock: true,
      emi: 3333
    },
    {
      id: 16,
      name: "Bosch 345L Double Door Refrigerator",
      brand: "Bosch",
      category: "Refrigerator",
      price: 52999,
      originalPrice: 62999,
      rating: 4.5,
      reviews: 178,
      image: "/bosch ref.jpg",
      inStock: true,
      emi: 4417
    },
    {
      id: 17,
      name: "LG 335L Double Door Refrigerator",
      brand: "LG",
      category: "Refrigerator",
      price: 48999,
      originalPrice: 56999,
      rating: 4.4,
      reviews: 234,
      image: "/lg ref.jpg",
      inStock: true,
      emi: 4083
    },
    {
      id: 18,
      name: "Panasonic 296L Double Door Refrigerator",
      brand: "Panasonic",
      category: "Refrigerator",
      price: 42999,
      originalPrice: 49999,
      rating: 4.3,
      reviews: 189,
      image: "/panasonic ref.jpg",
      inStock: true,
      emi: 3583
    },
    {
      id: 19,
      name: "Samsung 324L Double Door Refrigerator",
      brand: "Samsung",
      category: "Refrigerator",
      price: 46999,
      originalPrice: 54999,
      rating: 4.4,
      reviews: 267,
      image: "/samsung ref.jpg",
      inStock: true,
      emi: 3917
    },
    {
      id: 20,
      name: "Siemens 347L Double Door Refrigerator",
      brand: "Siemens",
      category: "Refrigerator",
      price: 58999,
      originalPrice: 68999,
      rating: 4.6,
      reviews: 145,
      image: "/siemens ref.jpg",
      inStock: true,
      emi: 4917
    },
    {
      id: 22,
      name: "Samsung 55\" 4K Crystal UHD Smart TV",
      brand: "Samsung",
      category: "Television",
      price: 54999,
      originalPrice: 69999,
      rating: 4.4,
      reviews: 342,
      image: "/panasonic tv.jpg",
      inStock: true,
      emi: 4583
    },
    {
      id: 23,
      name: "LG 50\" 4K NanoCell Smart TV",
      brand: "LG",
      category: "Television",
      price: 49999,
      originalPrice: 64999,
      rating: 4.5,
      reviews: 278,
      image: "/panasonic tv.jpg",
      inStock: true,
      emi: 4167
    },
    {
      id: 24,
      name: "Sony 43\" 4K Android Smart TV",
      brand: "Sony",
      category: "Television",
      price: 42999,
      originalPrice: 54999,
      rating: 4.3,
      reviews: 195,
      image: "/panasonic tv.jpg",
      inStock: true,
      emi: 3583
    },
    {
      id: 25,
      name: "TCL 65\" 4K QLED Smart TV",
      brand: "TCL",
      category: "Television",
      price: 64999,
      originalPrice: 84999,
      rating: 4.2,
      reviews: 156,
      image: "/panasonic tv.jpg",
      inStock: true,
      emi: 5417
    },
    {
      id: 26,
      name: "Mi 32\" HD Ready Smart TV",
      brand: "Mi",
      category: "Television",
      price: 16999,
      originalPrice: 22999,
      rating: 4.1,
      reviews: 423,
      image: "/panasonic tv.jpg",
      inStock: true,
      emi: 1417
    },
    // Water Heaters - Top 5 Indian Brands
    {
      id: 27,
      name: "V Guard Victo Plus 15L Storage Water Heater",
      brand: "V Guard",
      category: "Water Heater",
      price: 8999,
      originalPrice: 12999,
      rating: 4.3,
      reviews: 245,
      image: "/v gurad wh.jpg",
      inStock: true,
      emi: 750,
      description: "Energy efficient 5-star rated water heater with advanced safety features, rust-resistant tank, and 7-year warranty on inner tank."
    },
    {
      id: 28,
      name: "Havells Monza EC 25L Storage Water Heater",
      brand: "Havells",
      category: "Water Heater",
      price: 12999,
      originalPrice: 16999,
      rating: 4.4,
      reviews: 189,
      image: "/harvells wh.jpg",
      inStock: true,
      emi: 1083,
      description: "Premium water heater with titanium enamel coating, digital display, and smart connectivity features for optimal performance."
    },
    {
      id: 29,
      name: "Bajaj New Shakti PC Deluxe 25L Water Heater",
      brand: "Bajaj",
      category: "Water Heater",
      price: 9999,
      originalPrice: 13999,
      rating: 4.2,
      reviews: 312,
      image: "/bajaj wh.jpg",
      inStock: true,
      emi: 833,
      description: "Reliable water heater with glass-lined tank, magnesium anode rod for corrosion protection, and superior insulation for energy savings."
    },
    {
      id: 30,
      name: "Crompton Arno Neo 15L Instant Water Heater",
      brand: "Crompton",
      category: "Water Heater",
      price: 7999,
      originalPrice: 10999,
      rating: 4.1,
      reviews: 167,
      image: "/crompton wh.jpg",
      inStock: true,
      emi: 667,
      description: "Compact instant water heater with copper heating element, automatic thermal cut-out, and pressure release valve for safety."
    },
    {
      id: 31,
      name: "Racold Eterno Pro 25L Storage Water Heater",
      brand: "Racold",
      category: "Water Heater",
      price: 11999,
      originalPrice: 15999,
      rating: 4.5,
      reviews: 234,
      image: "/livpure wh.jpg",
      inStock: true,
      emi: 1000,
      description: "Advanced water heater with titanium plus technology, smart bath logic, and 5-star energy rating for maximum efficiency."
    },
    // Water Purifiers - Top 5 Indian Brands
    {
      id: 32,
      name: "Kent Grand Plus 8L RO+UV+UF Water Purifier",
      brand: "Kent",
      category: "Water Purifier",
      price: 18999,
      originalPrice: 24999,
      rating: 4.6,
      reviews: 456,
      image: "/kent wf.jpg",
      inStock: true,
      emi: 1583,
      description: "Advanced 7-stage purification with RO+UV+UF technology, TDS controller, and 8L storage tank. Removes bacteria, viruses, and dissolved impurities."
    },
    {
      id: 33,
      name: "Aquaguard Enhance Green 7L RO+UV+MTDS Water Purifier",
      brand: "Aquaguard",
      category: "Water Purifier",
      price: 16999,
      originalPrice: 21999,
      rating: 4.4,
      reviews: 378,
      image: "/aqua wf.jpg",
      inStock: true,
      emi: 1417,
      description: "Eco-friendly water purifier with Green RO technology, mineral guard, and taste adjuster. Features smart LED indicators and 7L storage."
    },
    {
      id: 34,
      name: "Pureit Eco Water Saver 10L RO+UV+MF Water Purifier",
      brand: "Pureit",
      category: "Water Purifier",
      price: 14999,
      originalPrice: 19999,
      rating: 4.3,
      reviews: 289,
      image: "/pureit wf.jpg",
      inStock: true,
      emi: 1250,
      description: "Water-saving RO purifier with 6-stage purification, mineral cartridge, and digital display. Saves up to 60% water with zero water wastage."
    },
    {
      id: 35,
      name: "Blue Star Aristo 8L RO+UV Water Purifier",
      brand: "Blue Star",
      category: "Water Purifier",
      price: 17999,
      originalPrice: 23999,
      rating: 4.5,
      reviews: 198,
      image: "/blue star aristo wf.jpg",
      inStock: true,
      emi: 1500,
      description: "Premium water purifier with copper impregnated activated carbon, aqua taste booster, and smart LED indicators for filter life monitoring."
    },
    {
      id: 36,
      name: "Livpure Glo 7L RO+UV+UF Water Purifier",
      brand: "Livpure",
      category: "Water Purifier",
      price: 13999,
      originalPrice: 18999,
      rating: 4.2,
      reviews: 234,
      image: "/livpure wf.jpg",
      inStock: true,
      emi: 1167,
      description: "Sleek water purifier with 7-stage purification, mineralizer technology, and smart filter change indicator. Ideal for Indian water conditions."
    },
    // Fans - Top 5 Indian Brands
    {
      id: 37,
      name: "Havells Stealth Air 1200mm Premium Ceiling Fan",
      brand: "Havells",
      category: "Fan",
      price: 4999,
      originalPrice: 6999,
      rating: 4.5,
      reviews: 342,
      image: "/havells fan.jpg",
      inStock: true,
      emi: 417,
      description: "Premium BLDC motor ceiling fan with aerodynamically designed blades, remote control, and energy-saving technology. Delivers superior air delivery with whisper-quiet operation."
    },
    {
      id: 38,
      name: "Orient Electric Aeroquiet 1200mm Ceiling Fan",
      brand: "Orient Electric",
      category: "Fan",
      price: 3999,
      originalPrice: 5499,
      rating: 4.3,
      reviews: 278,
      image: "/orient fan.jpg",
      inStock: true,
      emi: 333,
      description: "High-performance ceiling fan with aerodynamic blade design, rust-proof finish, and superior motor efficiency. Features double ball bearing for long-lasting performance."
    },
    {
      id: 39,
      name: "Crompton Hill Briz 1200mm Ceiling Fan",
      brand: "Crompton",
      category: "Fan",
      price: 2999,
      originalPrice: 4299,
      rating: 4.2,
      reviews: 456,
      image: "/crompton fan.jpg",
      inStock: true,
      emi: 250,
      description: "Elegant ceiling fan with decorative design, high-grade steel construction, and powerful motor. Ideal for modern homes with superior air circulation."
    },
    {
      id: 40,
      name: "Bajaj Maxima 1200mm Ceiling Fan",
      brand: "Bajaj",
      category: "Fan",
      price: 2499,
      originalPrice: 3499,
      rating: 4.1,
      reviews: 523,
      image: "/bajaj fan.jpg",
      inStock: true,
      emi: 208,
      description: "Reliable ceiling fan with ribbed blades for enhanced air delivery, anti-dust coating, and robust motor. Perfect balance of performance and affordability."
    },
    {
      id: 41,
      name: "Usha Striker Galaxy 1200mm Ceiling Fan",
      brand: "Usha",
      category: "Fan",
      price: 3499,
      originalPrice: 4799,
      rating: 4.4,
      reviews: 189,
      image: "/usha fan.jpg",
      inStock: true,
      emi: 292,
      description: "Stylish ceiling fan with unique blade design, premium finish, and high-speed motor. Features anti-rust coating and smooth operation for years."
    },
    // Air Coolers - Top 5 Indian Brands
    {
      id: 42,
      name: "Symphony Diet 22T 22L Personal Air Cooler",
      brand: "Symphony",
      category: "Air Cooler",
      price: 7999,
      originalPrice: 10999,
      rating: 4.3,
      reviews: 234,
      image: "/symphony air.jpg",
      inStock: true,
      emi: 667,
      description: "Compact personal air cooler with honeycomb cooling pads, powerful motor, and ice chamber. Perfect for small rooms with efficient cooling and low power consumption."
    },
    {
      id: 43,
      name: "Bajaj Platini PX97 Torque 36L Desert Air Cooler",
      brand: "Bajaj",
      category: "Air Cooler",
      price: 9999,
      originalPrice: 13999,
      rating: 4.2,
      reviews: 167,
      image: "/bajaj platini air.jpg",
      inStock: true,
      emi: 833,
      description: "High-capacity desert air cooler with turbo fan technology, 4-way air deflection, and honeycomb cooling pads. Ideal for large rooms and outdoor spaces."
    },
    {
      id: 44,
      name: "Orient Electric Smartcool DX 50L Tower Air Cooler",
      brand: "Orient Electric",
      category: "Air Cooler",
      price: 11999,
      originalPrice: 15999,
      rating: 4.4,
      reviews: 298,
      image: "/orient air.jpg",
      inStock: true,
      emi: 1000,
      description: "Smart tower air cooler with remote control, digital display, and inverter compatibility. Features auto-fill, timer function, and powerful cooling performance."
    },
    {
      id: 45,
      name: "Crompton Ozone 75L Desert Air Cooler",
      brand: "Crompton",
      category: "Air Cooler",
      price: 13999,
      originalPrice: 18999,
      rating: 4.1,
      reviews: 145,
      image: "/crompton air.jpg",
      inStock: true,
      emi: 1167,
      description: "Large capacity desert air cooler with everlast pump, honeycomb cooling pads, and castor wheels. Designed for maximum cooling in hot and dry climates."
    },
    {
      id: 46,
      name: "Voltas VM D70MH 70L Desert Air Cooler",
      brand: "Voltas",
      category: "Air Cooler",
      price: 15999,
      originalPrice: 21999,
      rating: 4.5,
      reviews: 312,
      image: "/voltas air.jpg",
      inStock: true,
      emi: 1333,
      description: "Premium desert air cooler with multi-stage air purification, mosquito net, and high-efficiency cooling pads. Features auto-swing and speed control."
    }
  ];

  // Effect to handle URL parameters
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const brandParam = searchParams.get('brand');
    
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    
    if (brandParam) {
      setSelectedBrands([brandParam]);
    }
  }, [searchParams]);

  // Filter products based on all selected filters
  const products = allProducts.filter(product => {
    // Category filter
    if (selectedCategory && product.category !== selectedCategory) {
      return false;
    }
    
    // Brand filter (check URL brand parameter first)
    const brandParam = searchParams.get('brand');
    if (brandParam && product.brand !== brandParam) {
      return false;
    }
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }
    
    // Price range filter
    if (selectedPriceRange) {
      switch (selectedPriceRange) {
        case 'under-20k':
          if (product.price >= 20000) return false;
          break;
        case '20k-40k':
          if (product.price < 20000 || product.price >= 40000) return false;
          break;
        case '40k-60k':
          if (product.price < 40000 || product.price >= 60000) return false;
          break;
        case 'above-60k':
          if (product.price < 60000) return false;
          break;
      }
    }
    
    // In stock filter
    if (showInStockOnly && !product.inStock) {
      return false;
    }
    
    // EMI filter (assuming all products have EMI if they have an emi property)
    if (showEMIOnly && !product.emi) {
      return false;
    }
    
    return true;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container-custom py-8">
        {/* Back Button and Breadcrumb */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 hover:bg-gray-100"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-primary">Home</a>
              <span>/</span>
              <span className="text-foreground">Shop</span>
            </div>
          </div>
        </div>

        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div>
            <h1 className="mb-2">
              {searchParams.get('brand') ? `${searchParams.get('brand')} Products` : 
               selectedCategory ? `${selectedCategory} Products` : 'Shop All Products'}
            </h1>
            <p className="text-muted-foreground">
              {searchParams.get('brand') ? `Browse our collection of ${searchParams.get('brand')} products` :
               selectedCategory 
                ? `Browse our collection of ${selectedCategory.toLowerCase()} products from trusted brands`
                : 'Discover our complete range of home appliances from trusted brands'
              }
            </p>
            {(selectedCategory || searchParams.get('brand')) && (
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-2"
                onClick={() => {
                  setSelectedCategory('');
                  setSelectedBrands([]);
                  navigate('/shop');
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
              <Input
                placeholder="Search products..."
                className="pl-10 w-64"
              />
            </div>
            
            {/* View Toggle */}
            <div className="flex items-center border rounded-lg">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-r-none"
              >
                <Grid3X3 size={16} />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-l-none"
              >
                <List size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* Water Products Header Section */}
        {(selectedCategory === 'Water Heater' || selectedCategory === 'Water Purifier' || !selectedCategory) && (
          <div className="mb-12">
            <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold text-blue-900">💧 Premium Water Solutions</h2>
                  <p className="text-lg text-blue-700 max-w-3xl mx-auto">
                    Discover India's top water brands offering cutting-edge water heaters and purifiers. 
                    Ensure pure, safe water and optimal heating solutions for your home with trusted Indian technology.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <Button 
                      variant="outline" 
                      className="bg-white/80 hover:bg-white border-blue-300"
                      onClick={() => {
                        setSelectedCategory('Water Heater');
                        navigate('/shop?category=Water%20Heater');
                      }}
                    >
                      🔥 Water Heaters
                    </Button>
                    <Button 
                      variant="outline" 
                      className="bg-white/80 hover:bg-white border-blue-300"
                      onClick={() => {
                        setSelectedCategory('Water Purifier');
                        navigate('/shop?category=Water%20Purifier');
                      }}
                    >
                      💧 Water Purifiers
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-2 shadow-md p-2">
                        <img 
                          src="/v guard logo.png" 
                          alt="V Guard Logo" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-sm font-medium text-blue-800">V Guard</p>
                      <p className="text-xs text-blue-600">Premium Quality</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-2 shadow-md p-2">
                        <img 
                          src="/kent logo.png" 
                          alt="Kent Logo" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-sm font-medium text-blue-800">Kent</p>
                      <p className="text-xs text-blue-600">Advanced Tech</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-2 shadow-md p-2">
                        <img 
                          src="/harvells logo.png" 
                          alt="Havells Logo" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-sm font-medium text-blue-800">Havells</p>
                      <p className="text-xs text-blue-600">Smart Features</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-2 shadow-md p-2">
                        <img 
                          src="/aquaguard logo.png" 
                          alt="Aquaguard Logo" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-sm font-medium text-blue-800">Aquaguard</p>
                      <p className="text-xs text-blue-600">Trusted Brand</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-2 shadow-md p-2">
                        <img 
                          src="/blue star logo.png" 
                          alt="Blue Star Logo" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-sm font-medium text-blue-800">Blue Star</p>
                      <p className="text-xs text-blue-600">Premium Range</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="w-80 space-y-6 hidden lg:block">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <SlidersHorizontal size={18} />
                  Filters
                </h3>
                
                {/* Categories */}
                <div className="space-y-4 mb-6">
                  <h4 className="font-medium text-sm">Categories</h4>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox 
                          id={category} 
                          checked={selectedCategory === category}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedCategory(category);
                              navigate(`/shop?category=${encodeURIComponent(category)}`);
                            } else {
                              setSelectedCategory('');
                              navigate('/shop');
                            }
                          }}
                        />
                        <label 
                          htmlFor={category} 
                          className="text-sm cursor-pointer"
                          onClick={() => {
                            if (selectedCategory === category) {
                              setSelectedCategory('');
                              navigate('/shop');
                            } else {
                              setSelectedCategory(category);
                              navigate(`/shop?category=${encodeURIComponent(category)}`);
                            }
                          }}
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div className="space-y-4 mb-6">
                  <h4 className="font-medium text-sm">Brands</h4>
                  <div className="space-y-3">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox 
                          id={brand}
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedBrands([...selectedBrands, brand]);
                            } else {
                              setSelectedBrands(selectedBrands.filter(b => b !== brand));
                            }
                          }}
                        />
                        <label 
                          htmlFor={brand} 
                          className="text-sm cursor-pointer"
                          onClick={() => {
                            if (selectedBrands.includes(brand)) {
                              setSelectedBrands(selectedBrands.filter(b => b !== brand));
                            } else {
                              setSelectedBrands([...selectedBrands, brand]);
                            }
                          }}
                        >
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="space-y-4 mb-6">
                  <h4 className="font-medium text-sm">Price Range</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="under-20k"
                        checked={selectedPriceRange === 'under-20k'}
                        onCheckedChange={(checked) => {
                          setSelectedPriceRange(checked ? 'under-20k' : '');
                        }}
                      />
                      <label 
                        htmlFor="under-20k" 
                        className="text-sm cursor-pointer"
                        onClick={() => {
                          setSelectedPriceRange(selectedPriceRange === 'under-20k' ? '' : 'under-20k');
                        }}
                      >
                        Under ₹20,000
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="20k-40k"
                        checked={selectedPriceRange === '20k-40k'}
                        onCheckedChange={(checked) => {
                          setSelectedPriceRange(checked ? '20k-40k' : '');
                        }}
                      />
                      <label 
                        htmlFor="20k-40k" 
                        className="text-sm cursor-pointer"
                        onClick={() => {
                          setSelectedPriceRange(selectedPriceRange === '20k-40k' ? '' : '20k-40k');
                        }}
                      >
                        ₹20,000 - ₹40,000
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="40k-60k"
                        checked={selectedPriceRange === '40k-60k'}
                        onCheckedChange={(checked) => {
                          setSelectedPriceRange(checked ? '40k-60k' : '');
                        }}
                      />
                      <label 
                        htmlFor="40k-60k" 
                        className="text-sm cursor-pointer"
                        onClick={() => {
                          setSelectedPriceRange(selectedPriceRange === '40k-60k' ? '' : '40k-60k');
                        }}
                      >
                        ₹40,000 - ₹60,000
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="above-60k"
                        checked={selectedPriceRange === 'above-60k'}
                        onCheckedChange={(checked) => {
                          setSelectedPriceRange(checked ? 'above-60k' : '');
                        }}
                      />
                      <label 
                        htmlFor="above-60k" 
                        className="text-sm cursor-pointer"
                        onClick={() => {
                          setSelectedPriceRange(selectedPriceRange === 'above-60k' ? '' : 'above-60k');
                        }}
                      >
                        Above ₹60,000
                      </label>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="space-y-4">
                  <h4 className="font-medium text-sm">Availability</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="in-stock"
                        checked={showInStockOnly}
                        onCheckedChange={(checked) => setShowInStockOnly(checked === true)}
                      />
                      <label 
                        htmlFor="in-stock" 
                        className="text-sm cursor-pointer"
                        onClick={() => {
                          setShowInStockOnly(!showInStockOnly);
                        }}
                      >
                        In Stock
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="emi-available"
                        checked={showEMIOnly}
                        onCheckedChange={(checked) => setShowEMIOnly(checked === true)}
                      />
                      <label 
                        htmlFor="emi-available" 
                        className="text-sm cursor-pointer"
                        onClick={() => {
                          setShowEMIOnly(!showEMIOnly);
                        }}
                      >
                        EMI Available
                      </label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing 1-{products.length} of {products.length} results
              </p>
              
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter size={16} className="mr-2" />
                  Filters
                </Button>
                
                <Select defaultValue="featured">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products */}
            <div className={`${selectedCategory === 'Refrigerator' ? 'refrigerator-grid' : ''}`}>
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
              {products.map((product) => (
                <Card key={product.id} className={`card-hover group overflow-hidden relative border-2 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 ${product.category === 'Refrigerator' ? 'refrigerator-card' : ''}`}>
                  <div className={`${viewMode === 'list' ? 'flex' : ''}`}>
                    <div className={`relative product-image ${viewMode === 'list' ? 'w-64' : ''}`}>
                      <div className="relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                            viewMode === 'list' ? 'h-48' : 'h-48'
                          }`}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      {/* Discount Badge */}
                      {product.originalPrice > product.price && (
                        <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                        </div>
                      )}
                      
                      {/* Wishlist Button */}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Heart size={16} />
                      </Button>
                      
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Badge variant="destructive">Out of Stock</Badge>
                        </div>
                      )}
                    </div>

                    <CardContent className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                              {product.brand}
                            </Badge>
                            <h3 className="font-semibold text-secondary leading-tight line-clamp-2">
                              {product.name}
                            </h3>
                          </div>
                          
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{product.rating}</span>
                            <span className="text-xs text-muted-foreground">({product.reviews})</span>
                          </div>
                        </div>

                        {product.description && (
                          <div className="text-sm text-muted-foreground leading-relaxed">
                            {product.description}
                          </div>
                        )}

                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-primary tabular-nums">
                              {formatPrice(product.price)}
                            </span>
                            <span className="text-sm text-muted-foreground line-through tabular-nums">
                              {formatPrice(product.originalPrice)}
                            </span>
                          </div>
                          <div className="text-sm text-success font-medium">
                            Save {formatPrice(product.originalPrice - product.price)}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            EMI from ₹{product.emi.toLocaleString()}/month
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button 
                            className="flex-1 btn-gradient hover:scale-105 transition-transform duration-200" 
                            disabled={!product.inStock}
                            onClick={() => handleAddToCart(product)}
                          >
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                          </Button>
                          <Button 
                            variant="outline"
                            size="sm"
                            onClick={() => navigate(`/product/${product.id}`)}
                            className="px-4 hover:scale-105 transition-transform duration-200"
                          >
                            View
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;