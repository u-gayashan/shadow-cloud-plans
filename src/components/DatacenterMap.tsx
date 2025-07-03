
import { Card } from "@/components/ui/card";

const datacenters = [
  { name: "Los Angeles DC-03", x: "15%", y: "60%" },
  { name: "San Jose", x: "12%", y: "55%" },
  { name: "Seattle", x: "18%", y: "35%" },
  { name: "Chicago", x: "45%", y: "45%" },
  { name: "Dallas", x: "40%", y: "65%" },
  { name: "New York", x: "55%", y: "40%" },
  { name: "Ashburn", x: "58%", y: "45%" },
  { name: "Toronto", x: "52%", y: "35%" },
];

export const DatacenterMap = () => {
  return (
    <Card className="relative w-full max-w-4xl mx-auto bg-gradient-to-b from-card to-muted/20 border-2">
      <div className="aspect-[2/1] relative overflow-hidden rounded-lg bg-gradient-to-br from-background via-muted/10 to-muted/30">
        {/* Stylized North America outline - More visible */}
        <div className="absolute inset-0 opacity-30">
          <svg viewBox="0 0 800 400" className="w-full h-full">
            {/* Main continent shape */}
            <path
              d="M120 280 
                 Q140 200 180 180 
                 Q220 160 280 170 
                 Q320 150 380 160 
                 Q420 140 480 150 
                 Q540 135 600 145 
                 Q640 130 680 140 
                 L680 200 
                 Q670 240 650 260 
                 Q620 280 580 290 
                 Q540 300 500 295 
                 Q460 300 420 295 
                 Q380 300 340 290 
                 Q300 295 260 285 
                 Q220 290 180 280 
                 Q150 285 120 280 Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              className="text-foreground"
            />
            {/* Great Lakes region */}
            <ellipse cx="450" cy="220" rx="30" ry="15" fill="currentColor" className="text-foreground opacity-50" />
            <ellipse cx="470" cy="210" rx="15" ry="8" fill="currentColor" className="text-foreground opacity-50" />
          </svg>
        </div>

        {/* Grid lines for reference */}
        <div className="absolute inset-0 opacity-5">
          <svg viewBox="0 0 100 50" className="w-full h-full">
            {[...Array(11)].map((_, i) => (
              <line key={`v${i}`} x1={i * 10} y1="0" x2={i * 10} y2="50" stroke="currentColor" strokeWidth="0.5" />
            ))}
            {[...Array(6)].map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="currentColor" strokeWidth="0.5" />
            ))}
          </svg>
        </div>

        {/* Datacenter indicators */}
        {datacenters.map((dc, index) => (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
            style={{ left: dc.x, top: dc.y }}
          >
            {/* Pulse effect */}
            <div className="absolute w-8 h-8 bg-primary/20 rounded-full datacenter-pulse transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
            <div className="absolute w-6 h-6 bg-primary/30 rounded-full datacenter-pulse transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" style={{ animationDelay: '0.5s' }}></div>
            
            {/* Center dot */}
            <div className="w-3 h-3 bg-primary rounded-full border-2 border-background shadow-lg relative z-10"></div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
              {dc.name}
            </div>
          </div>
        ))}

        {/* Network connections (decorative lines) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
              <stop offset="50%" stopColor="currentColor" stopOpacity="0.15" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          {datacenters.slice(0, -1).map((dc, index) => {
            const nextDc = datacenters[index + 1];
            return (
              <line
                key={index}
                x1={dc.x}
                y1={dc.y}
                x2={nextDc.x}
                y2={nextDc.y}
                stroke="url(#connectionGradient)"
                strokeWidth="1"
                className="text-primary"
              />
            );
          })}
        </svg>
      </div>
      
      {/* Legend */}
      <div className="p-4 text-center">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span>Active Datacenters ({datacenters.length} locations)</span>
        </div>
      </div>
    </Card>
  );
};
