
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    ram: "512 MB",
    cpu: "1 vCore",
    storage: "30 GB RAID-10",
    bandwidth: "500 GB @ 1Gbps",
    ipv4: "1 Free IP",
    price: "$22.99",
    period: "/year",
    popular: false
  },
  {
    name: "Basic",
    ram: "1 GB",
    cpu: "2 vCore",
    storage: "50 GB RAID-10",
    bandwidth: "1 TB @ 1Gbps",
    ipv4: "1 Free IP",
    price: "$17.99",
    period: "/month",
    popular: true
  },
  {
    name: "Standard",
    ram: "2 GB",
    cpu: "3 vCore",
    storage: "75 GB RAID-10",
    bandwidth: "2 TB @ 1Gbps",
    ipv4: "1 Free IP",
    price: "$20.59",
    period: "/month",
    popular: false
  },
  {
    name: "Professional",
    ram: "4 GB",
    cpu: "4 vCore",
    storage: "130 GB RAID-10",
    bandwidth: "3 TB @ 1Gbps",
    ipv4: "1 Free IP",
    price: "$24.59",
    period: "/month",
    popular: false
  },
  {
    name: "Business",
    ram: "6 GB",
    cpu: "5 vCore",
    storage: "170 GB RAID-10",
    bandwidth: "4 TB @ 1Gbps",
    ipv4: "1 Free IP",
    price: "$27.59",
    period: "/month",
    popular: false
  },
  {
    name: "Enterprise",
    ram: "8 GB",
    cpu: "6 vCore",
    storage: "220 GB RAID-10",
    bandwidth: "5 TB @ 1Gbps",
    ipv4: "2 Free IPs",
    price: "$36.59",
    period: "/month",
    popular: false
  },
  {
    name: "Premium",
    ram: "12 GB",
    cpu: "7 vCore",
    storage: "300 GB RAID-10",
    bandwidth: "6 TB @ 1Gbps",
    ipv4: "2 Free IPs",
    price: "$55.99",
    period: "/month",
    popular: false
  }
];

export const PricingTable = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {pricingPlans.map((plan, index) => (
        <Card 
          key={index} 
          className={`relative hover:shadow-lg transition-all duration-300 ${
            plan.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''
          }`}
        >
          {plan.popular && (
            <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
              Most Popular
            </Badge>
          )}
          
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
            <div className="text-3xl font-bold text-primary">
              {plan.price}
              <span className="text-sm font-normal text-muted-foreground">{plan.period}</span>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm">{plan.ram} RAM</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm">{plan.cpu}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm">{plan.storage}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm">{plan.bandwidth}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm">{plan.ipv4}</span>
              </div>
            </div>
            
            <Button 
              className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
              variant={plan.popular ? 'default' : 'outline'}
            >
              Choose Plan
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
