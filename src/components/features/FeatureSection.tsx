import { RadioCards } from "@radix-ui/themes";
import { useState } from "react";

const features = [
  {
    image: "/lovable-uploads/bc30e1b3-cc8b-4dc2-8a55-15ee964895aa.png",
    title: "Global Network",
    description: "Choose from 8+ worldwide datacenters for optimal latency and performance."
  },
  {
    image: "/lovable-uploads/56f6eaf8-0340-4d58-aed8-2027d1005fb3.png",
    title: "High Performance",
    description: "Enterprise-grade hardware with RAID-10 storage and high-speed networking."
  },
  {
    image: "/lovable-uploads/d4d249ce-245e-4249-854a-788a5a175f6a.png",
    title: "Easy Management",
    description: "Intuitive control panel with one-click deployments and automated backups."
  },
  {
    image: "/lovable-uploads/17a08f2a-3e9a-44cd-a9f1-8a21007c18b6.png",
    title: "Secure & Reliable",
    description: "99.9% uptime guarantee with advanced security measures and monitoring."
  },
  {
    image: "/lovable-uploads/6c35d015-82c0-4d5c-bc25-6095ed7c2396.png",
    title: "24/7 Support",
    description: "Expert technical support available around the clock to assist you."
  },
  {
    image: "/lovable-uploads/7096f7c1-6b7f-4b1f-905d-43ba8830ed47.png",
    title: "Lightning Fast",
    description: "Deploy your VPS in minutes with our automated provisioning system."
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <RadioCards.Item key={index} value={index.toString()}>
                <div className="flex flex-col items-center text-center p-4">
                  {/* Image container */}
                  <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 mb-4 flex items-center justify-center">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-12 h-12 md:w-16 md:h-16 object-contain"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
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