
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useNavigate } from "react-router-dom";
import { DatacenterMap } from "@/components/DatacenterMap";
import { PricingTable } from "@/components/PricingTable";
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
      {/* Release Notification */}
      {showNotification && (
        <Alert className="mb-6 mx-4 md:mx-8 mt-4 border-primary/20 bg-primary/5">
          <AlertDescription className="flex items-center justify-between">
            <span>🎉 New KVM VPS Plans Released! Better performance at lower prices.</span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleViewNewPlans}
              className="ml-4 shrink-0"
            >
              View New Plans
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {/* Hero Section */}
      <section className="px-4 md:px-8 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            Premium Cloud Solutions
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
            Enterprise Cloud Infrastructure
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
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

      {/* Features Grid */}
      <section className="px-4 md:px-8 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Cloud Platform</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Datacenter Map */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Global Datacenter Network</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our strategically located datacenters ensure low latency and high availability for your applications worldwide.
          </p>
          <DatacenterMap />
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="px-4 md:px-8 py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Current VPS Plans</h2>
          <p className="text-muted-foreground text-center mb-12">
            Choose the perfect plan for your needs with our flexible pricing options.
          </p>
          <PricingTable />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-12 border-t bg-card">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
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
