
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useNavigate } from "react-router-dom";
import { DatacenterMap } from "@/components/map/DatacenterMap";
import { VPSTable } from "@/components/VPSTable";
import { TimedNotification } from "@/components/TimedNotification";
import { FeatureSection } from "@/components/features/FeatureSection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  const [showNotification, setShowNotification] = useState(true);
  const navigate = useNavigate();

  const handleViewNewPlans = () => {
    setShowNotification(false);
    navigate("/dashboard");
  };


  return (
    <div className="min-h-screen bg-background">
      <TimedNotification />
      
      {/* Release Notification */}
      {showNotification && (
        <Alert className="mb-6 mx-auto w-full max-w-screen-xl px-4 md:px-8 mt-4 border-primary/20 bg-primary/5">
        <AlertDescription className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2">
          <span>🎉 <strong>New KVM VPS Plans </strong>Released! Better performance at lower prices.</span>
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

      {/* Features Section */}
      <FeatureSection />

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
      <Footer />
    </div>
  );
};

export default Index;
