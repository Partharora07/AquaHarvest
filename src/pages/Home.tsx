import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Droplets, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2">
          <Droplets className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold text-foreground">AquaHarvest</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/40 to-accent/20" />
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Calculate your{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Rainwater Harvesting Potential
              </span>{" "}
              in Minutes
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Enter your rooftop size and location to know your water savings and 
              contribute to sustainable water management.
            </p>
            
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => navigate("/input")}
              className="group"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Calculation</h3>
              <p className="text-muted-foreground">Get instant results for your rainwater harvesting potential</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold">₹</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cost Analysis</h3>
              <p className="text-muted-foreground">Detailed breakdown of investment and payback period</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-secondary font-bold">✓</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Feasibility Check</h3>
              <p className="text-muted-foreground">Professional assessment of structure recommendations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;