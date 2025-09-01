import { ArrowRight, ShoppingBag, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="gradient-hero section-spacing">
      <div className="container-custom">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          {/* Text Content */}
          <div className="md:col-span-6 space-y-8">
            <div className="space-y-4">
              <h1 className="leading-tight">
                Premium Home Appliances & 
                <span className="text-accent block">Expert Services</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Authorized dealer for top brands. Professional installation, genuine parts, and 24/7 service support for all your home appliance needs.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm font-medium">Authorized Dealer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm font-medium">Genuine Parts</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm font-medium">Expert Technicians</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-gradient group">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Appliances
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Wrench className="mr-2 h-5 w-5" />
                Book Service
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Service Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:col-span-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80"
                alt="Modern home appliances showcase"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Service Badge */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                    <Wrench className="h-6 w-6 text-success-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary">Expert Service</div>
                    <div className="text-sm text-muted-foreground">Same-day repairs</div>
                  </div>
                </div>
              </div>

              {/* Floating Offer Badge */}
              <div className="absolute -top-6 -right-6 bg-accent text-accent-foreground px-6 py-3 rounded-xl shadow-lg font-semibold">
                Free Installation*
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;