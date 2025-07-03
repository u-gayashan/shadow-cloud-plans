
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, Server, HardDrive, Cpu, Network, MapPin, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const kvmPlans = [
  {
    name: "1 GB KVM VPS",
    price: "$10.96",
    period: "/year",
    cpu: "1 vCPU Core",
    storage: "20 GB SSD Storage",
    ram: "1 GB RAM",
    transfer: "2 TB",
    port: "1Gbps",
    access: "Full Root Access",
    ip: "1 IPv4 Address",
    virtualization: "KVM/SolusVM",
    popular: false
  },
  {
    name: "2 GB KVM VPS",
    price: "$17.66",
    period: "/year",
    cpu: "2 vCPU Cores",
    storage: "30 GB SSD Storage",
    ram: "2 GB RAM",
    transfer: "4 TB",
    port: "1Gbps",
    access: "Full Root Access",
    ip: "1 IPv4 Address",
    virtualization: "KVM/SolusVM",
    popular: true
  },
  {
    name: "3.5 GB KVM VPS",
    price: "$29.89",
    period: "/year",
    cpu: "3 vCPU Cores",
    storage: "60 GB SSD Storage",
    ram: "3.5 GB RAM",
    transfer: "5 TB",
    port: "1Gbps",
    access: "Full Root Access",
    ip: "1 IPv4 Address",
    virtualization: "KVM/SolusVM",
    popular: false
  },
  {
    name: "5 GB KVM VPS",
    price: "$54.99",
    period: "/year",
    cpu: "4 vCPU Cores",
    storage: "100 GB SSD Storage",
    ram: "5 GB RAM",
    transfer: "10 TB",
    port: "1Gbps",
    access: "Full Root Access",
    ip: "1 IPv4 Address",
    virtualization: "KVM/SolusVM",
    popular: false
  }
];

const locations = [
  "Los Angeles DC-03", "San Jose", "Seattle", "Chicago", 
  "Dallas", "New York", "Ashburn", "Toronto"
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="px-4 md:px-8 py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
            <div className="h-6 w-px bg-border" />
            <h1 className="text-2xl font-bold">KVM VPS Dashboard</h1>
          </div>
        </div>
      </div>

      {/* New Release Banner */}
      <Alert className="mx-4 md:mx-8 mt-6 border-green-200 bg-green-50 text-green-800">
        <AlertDescription>
          🎉 <strong>New KVM VPS Plans Now Available!</strong> Enjoy better performance, more features, and competitive pricing with our latest offerings.
        </AlertDescription>
      </Alert>

      {/* Plans Grid */}
      <div className="px-4 md:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">KVM VPS Plans</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              High-performance KVM virtualization with full root access and SSD storage. 
              Perfect for developers and businesses requiring reliable infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {kvmPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1">
                    Best Value
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary">
                    {plan.price}
                    <span className="text-lg font-normal text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Cpu className="w-4 h-4 text-primary shrink-0" />
                      <span>{plan.cpu}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <HardDrive className="w-4 h-4 text-primary shrink-0" />
                      <span>{plan.storage}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Server className="w-4 h-4 text-primary shrink-0" />
                      <span>{plan.ram}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Network className="w-4 h-4 text-primary shrink-0" />
                      <span>{plan.transfer} @ {plan.port}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-4 h-4 text-primary shrink-0" />
                      <span>{plan.access}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-primary shrink-0" />
                      <span>{plan.ip}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t">
                    <p className="text-xs text-muted-foreground mb-3">
                      <strong>Virtualization:</strong> {plan.virtualization}
                    </p>
                    
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      Deploy Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Deployment Locations */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Available Deployment Locations
              </CardTitle>
              <CardDescription>
                Choose from our global network of datacenters for optimal performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {locations.map((location, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">{location}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">KVM Virtualization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hardware-level virtualization for maximum performance and isolation with full root access.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">SSD Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  High-speed SSD storage ensures faster boot times and improved application performance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Round-the-clock technical support to help you with any questions or issues.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
