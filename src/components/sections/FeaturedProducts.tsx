import { Star, ShoppingCart, Heart, Zap, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/use-cart";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const products = [
    {
      id: 1,
      name: "Godrej 1.5 Ton 5 Star Split AC",
      brand: "Godrej",
      price: 35999,
      originalPrice: 42999,
      discount: 16,
      rating: 4.5,
      reviews: 234,
      image: "/godrej.jpg",
      features: ["Dual Inverter", "Copper Condenser", "Wi-Fi Control"],
      badge: "Best Seller",
      badgeColor: "bg-success"
    },
    {
      id: 3,
      name: "Bosch 345L Double Door Refrigerator",
      brand: "Bosch",
      category: "Refrigerator",
      price: 52999,
      originalPrice: 62999,
      rating: 4.5,
      reviews: 178,
      image: "/bosch ref.jpg",
      features: ["BioFresh Technology", "NoFrost", "LED Lighting"],
      badge: "Premium Choice",
      badgeColor: "bg-accent"
    },
    {
      id: 4,
      name: "Panasonic 1.5 Ton 3 Star Inverter Split AC",
      brand: "Panasonic",
      category: "Air Conditioner",
      price: 32999,
      originalPrice: 38999,
      rating: 4.3,
      reviews: 189,
      image: "/panasonic.jpg",
      features: ["Inverter Technology", "Copper Condenser", "PM 2.5 Filter"],
      badge: "New Arrival",
      badgeColor: "bg-destructive"
    },
    {
      id: 5,
      name: "Samsung 1.5 Ton 3 Star Inverter Split AC",
      brand: "Samsung",
      category: "Air Conditioner",
      price: 34999,
      originalPrice: 41999,
      rating: 4.4,
      reviews: 267,
      image: "/samsung.jpg",
      features: ["Inverter Technology", "Copper Condenser", "PM 2.5 Filter"],
      badge: "Energy Saver",
      badgeColor: "bg-primary"
    },
    {
      id: 6,
      name: "LG 1.5 Ton 5 Star Dual Inverter Split AC",
      brand: "LG",
      category: "Air Conditioner",
      price: 38999,
      originalPrice: 45999,
      rating: 4.6,
      reviews: 312,
      image: "/lg.jpg",
      features: ["Dual Inverter", "Ocean Black Fin", "AI Convertible"],
      badge: "Premium",
      badgeColor: "bg-accent"
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
      features: ["EcoSilence Drive", "ActiveWater Plus", "VarioPerfect"],
      badge: "Premium",
      badgeColor: "bg-primary"
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
      features: ["AI DD Technology", "Steam Wash", "TurboWash"],
      badge: "Smart Choice",
      badgeColor: "bg-accent"
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
      features: ["VitaFresh Technology", "NoFrost Plus", "LED Lighting"],
      badge: "Premium",
      badgeColor: "bg-primary"
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
      features: ["Smart Inverter", "Multi Air Flow", "Hygiene Fresh+"],
      badge: "Smart Choice",
      badgeColor: "bg-accent"
    },
    {
      id: 22,
      name: "Samsung 55\" 4K Crystal UHD Smart TV",
      brand: "Samsung",
      price: 54999,
      originalPrice: 69999,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=400&q=80",
      badge: "4K Smart TV",
      features: ["Crystal 4K Display", "Smart TV", "HDR10+", "Voice Control"],
      emi: 4583
    },
    {
      id: 23,
      name: "LG 50\" 4K NanoCell Smart TV",
      brand: "LG",
      price: 49999,
      originalPrice: 64999,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=400&q=80",
      badge: "NanoCell",
      features: ["NanoCell Technology", "webOS Smart TV", "AI ThinQ", "Dolby Vision"],
      emi: 4167
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
            <h2 className="mb-0 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Featured Products</h2>
            <TrendingUp className="h-8 w-8 text-accent" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked products from top brands with the best features, ratings, and value for money.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Star className="h-4 w-4 mr-2 text-yellow-500" />
              Top Rated
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Zap className="h-4 w-4 mr-2 text-blue-500" />
              Best Sellers
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Heart className="h-4 w-4 mr-2 text-red-500" />
              Customer Choice
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="card-hover group overflow-hidden relative border-2 hover:border-primary/50 hover:shadow-2xl transition-all duration-300">
              <div className="relative">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Badge */}
                <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white shadow-lg animate-pulse`}>
                  <Sparkles className="h-3 w-3 mr-1" />
                  {product.badge}
                </Badge>
                
                {/* Discount */}
                <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {product.discount}% OFF
                </div>

                {/* Wishlist */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart size={16} />
                </Button>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Brand & Rating */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">{product.brand}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>

                  {/* Product Name */}
                  <h3 className="font-semibold text-secondary leading-tight line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {product.features.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{product.features.length - 2} more
                      </Badge>
                    )}
                  </div>

                  {/* Price */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-secondary tabular-nums">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-sm text-muted-foreground line-through tabular-nums">
                        {formatPrice(product.originalPrice)}
                      </span>
                    </div>
                    <div className="text-sm text-success font-medium">
                      Save {formatPrice(product.originalPrice - product.price)}
                    </div>
                  </div>

                  {/* EMI */}
                  <div className="text-sm text-muted-foreground">
                    EMI from ₹{Math.round(product.price / 12).toLocaleString()}/month
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button 
                      className="flex-1 btn-gradient hover:scale-105 transition-transform duration-200"
                      onClick={() => addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        brand: product.brand
                      })}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="px-4 hover:scale-105 transition-transform duration-200"
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8"
            onClick={() => navigate('/shop')}
          >
            View All Products
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;