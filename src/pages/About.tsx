import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Users, Award, Shield, Heart, ArrowLeft } from "lucide-react";
import Footer from "@/components/ui/footer";

const About = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer First",
      description: "We prioritize customer satisfaction with quality products and excellent service."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Trusted Brands",
      description: "Partnering with top Indian and international brands for authentic products."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Assured",
      description: "All products come with manufacturer warranty and quality guarantee."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Made in India",
      description: "Supporting local brands and promoting Indian manufacturing excellence."
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "500+", label: "Products" },
    { number: "25+", label: "Brands" },
    { number: "5+", label: "Years Experience" }
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
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-secondary">About Kavita Cooler</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your trusted destination for premium home appliances and electronics. We bring you the best 
              Indian and international brands with unbeatable prices, quality assurance, and exceptional service.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-secondary">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit text-primary">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Story Section */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold text-center text-secondary">Our Story</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Founded with a vision to make quality home appliances accessible to every Indian household, 
                    Kavita Cooler has grown from a small local store to a trusted online destination.
                  </p>
                  <p className="text-muted-foreground">
                    We specialize in cooling solutions, electrical appliances, and electronics from renowned 
                    Indian brands like Havells, Bajaj, Symphony, and Orient Electric, ensuring you get 
                    authentic products at competitive prices.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline">Est. 2019</Badge>
                    <Badge variant="outline">Indian Brands</Badge>
                    <Badge variant="outline">Quality First</Badge>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To provide every Indian home with reliable, efficient, and affordable appliances 
                    that enhance comfort and convenience while supporting local manufacturing.
                  </p>
                  <h3 className="text-xl font-semibold">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To become India's most trusted platform for home appliances, known for quality 
                    products, exceptional service, and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
