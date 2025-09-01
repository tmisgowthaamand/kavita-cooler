import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import BrandShowcase from "@/components/sections/BrandShowcase";
import ServicesTeaser from "@/components/sections/ServicesTeaser";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <BrandShowcase />
        <ServicesTeaser />
        
        {/* Trust Indicators */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-success-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium text-sm">Free Installation</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-success-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium text-sm">EMI Available</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-success-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium text-sm">Extended Warranty</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-success-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
