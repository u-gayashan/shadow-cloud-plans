import { Server, Shield, Zap, Globe } from "lucide-react";
import { RadioCards } from "@radix-ui/themes";
import { useState } from "react";

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

export const FeatureSection = () => {
  const [selectedFeature, setSelectedFeature] = useState("0");

  return (
    <section className="px-4 md:px-8 py-12 md:py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16">
          Why Choose Our Cloud Platform
        </h2>
        
        <RadioCards.Root 
          value={selectedFeature} 
          onValueChange={setSelectedFeature}
          color="gray"
          size="3"
        >
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <RadioCards.Item key={index} value={index.toString()}>
                <div className="flex items-start gap-4 p-2">
                  {/* Icon container */}
                  <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-primary/5 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </RadioCards.Item>
            ))}
          </div>
        </RadioCards.Root>
        
        {/* Bottom accent line */}
        <div className="mt-12 md:mt-16 w-16 md:w-24 h-1 bg-gradient-to-r from-primary to-primary/30 mx-auto rounded-full" />
      </div>
    </section>
  );
};