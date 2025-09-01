import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Clock, Percent, Gift, Zap } from "lucide-react";
import Footer from "@/components/ui/footer";

const Offers = () => {
  const navigate = useNavigate();

  const offers = [
    {
      title: "Mega Electronics Sale",
      discount: "Up to 40% OFF",
      description: "Huge discounts on TVs, ACs, and home appliances from top brands",
      validTill: "31st August 2025",
      category: "Electronics",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-red-500"
    },
    {
      title: "Fan Festival",
      discount: "30% OFF",
      description: "Beat the heat with premium ceiling fans from Havells, Bajaj, and more",
      validTill: "15th September 2025",
      category: "Fans",
      icon: <Percent className="h-6 w-6" />,
      color: "bg-blue-500"
    },
    {
      title: "Cooling Combo",
      discount: "25% OFF",
      description: "Air coolers and ACs at unbeatable prices for the summer season",
      validTill: "30th September 2025",
      category: "Cooling",
      icon: <Gift className="h-6 w-6" />,
      color: "bg-green-500"
    },
    {
      title: "Water Solutions",
      discount: "35% OFF",
      description: "Water heaters and purifiers from trusted Indian brands",
      validTill: "10th September 2025",
      category: "Water",
      icon: <Clock className="h-6 w-6" />,
      color: "bg-purple-500"
    },
    {
      title: "EMI Special",
      discount: "0% Interest",
      description: "No cost EMI on purchases above ₹10,000 for 6 months",
      validTill: "31st December 2025",
      category: "Finance",
      icon: <Percent className="h-6 w-6" />,
      color: "bg-orange-500"
    },
    {
      title: "First Purchase",
      discount: "₹500 OFF",
      description: "Special discount for new customers on their first order",
      validTill: "Ongoing",
      category: "New Customer",
      icon: <Gift className="h-6 w-6" />,
      color: "bg-pink-500"
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
            <h1 className="text-4xl font-bold text-secondary">Special Offers</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't miss out on our amazing deals and discounts across all categories. Limited time offers!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-16 h-16 ${offer.color} transform rotate-45 translate-x-8 -translate-y-8`}></div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${offer.color} text-white`}>
                      {offer.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{offer.title}</CardTitle>
                      <Badge variant="outline" className="mt-1">{offer.category}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-2xl font-bold text-primary">
                    {offer.discount}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {offer.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    Valid till: {offer.validTill}
                  </div>
                  <Button 
                    className="w-full"
                    onClick={() => navigate(`/shop?category=${encodeURIComponent(offer.category)}`)}
                  >
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe for Exclusive Offers</h2>
            <p className="text-muted-foreground mb-6">
              Get notified about flash sales, new arrivals, and special discounts
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-md"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Offers;
