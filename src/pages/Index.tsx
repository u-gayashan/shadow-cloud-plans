
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useNavigate } from "react-router-dom";
import { DatacenterMap } from "@/components/DatacenterMap";
import { VPSTable } from "@/components/VPSTable";
import { TimedNotification } from "@/components/TimedNotification";
import { Server, Shield, Zap, Globe } from "lucide-react";

const Index = () => {
  const [showNotification, setShowNotification] = useState(true);
  const navigate = useNavigate();

  const handleViewNewPlans = () => {
    setShowNotification(false);
    navigate("/dashboard");
  };

  const features = [
    {
      icon: Server,
      title: "High Performance",
      description: "Enterprise-grade hardware with RAID-10 storage and high-speed networking"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "99.9% uptime guarantee with advanced security measures and monitoring"
    },
    {
      icon: Zap,
      title: "Instant Deployment",
      description: "Deploy your VPS in minutes with our automated provisioning system"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Multiple datacenter locations across North America for optimal performance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <TimedNotification />
      
      {/* Release Notification */}
      {showNotification && (
        <Alert className="mb-6 mx-4 md:mx-8 mt-4 border-primary/20 bg-primary/5">
          <AlertDescription className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span>🎉 New KVM VPS Plans Released! Better performance at lower prices.</span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleViewNewPlans}
              className="shrink-0 w-full sm:w-auto"
            >
              View New Plans
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {/* Hero Section */}
      <section className="px-4 md:px-8 py-12 md:py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            Premium Cloud Solutions
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
            Enterprise Cloud Infrastructure
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Deploy high-performance VPS instances across our global network. 
            Reliable, secure, and lightning-fast cloud solutions for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section - Redesigned */}
      <section className="px-4 md:px-8 py-12 md:py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">Why Choose Our Cloud Platform</h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                {/* Left-aligned design with border accent */}
                <div className="flex items-start gap-6 p-6 lg:p-8 bg-background rounded-lg border-l-4 border-primary/20 group-hover:border-primary transition-all duration-300 hover:shadow-lg">
                  {/* Icon container */}
                  <div className="shrink-0 w-16 h-16 bg-primary/5 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl lg:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
          
          {/* Bottom accent line */}
          <div className="mt-16 w-24 h-1 bg-gradient-to-r from-primary to-primary/30 mx-auto rounded-full" />
        </div>
      </section>

      {/* VPS Plans Table */}
      <section className="px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Current VPS Plans</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Choose the perfect plan for your needs with our flexible pricing options.
          </p>
          <VPSTable />
        </div>
      </section>

      {/* Datacenter Map */}
      <section className="px-4 md:px-8 py-12 md:py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Global Datacenter Network</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our strategically located datacenters ensure low latency and high availability for your applications worldwide.
          </p>
          <DatacenterMap />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-12 border-t bg-card">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6">
            Join thousands of satisfied customers who trust our cloud infrastructure.
          </p>
          <Button size="lg" className="text-lg px-8">
            Deploy Your First VPS
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
