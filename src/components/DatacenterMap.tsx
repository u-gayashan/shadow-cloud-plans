
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
        {/* Stylized North America outline */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 800 400" className="w-full h-full">
            <path
              d="M100 200 Q200 150 300 180 Q400 160 500 170 Q600 160 700 180 L700 300 Q600 320 500 310 Q400 320 300 300 Q200 310 100 280 Z"
              fill="currentColor"
              className="text-foreground"
            />
          </svg>
        </div>

        {/* Datacenter indicators */}
        {datacenters.map((dc, index) => (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            style={{ left: dc.x, top: dc.y }}
          >
            {/* Pulse effect */}
            <div className="absolute w-8 h-8 bg-primary/20 rounded-full datacenter-pulse transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
            <div className="absolute w-6 h-6 bg-primary/30 rounded-full datacenter-pulse transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" style={{ animationDelay: '0.5s' }}></div>
            
            {/* Center dot */}
            <div className="w-3 h-3 bg-primary rounded-full border-2 border-background shadow-lg relative z-10"></div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {dc.name}
            </div>
          </div>
        ))}

        {/* Network connections (decorative lines) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
              <stop offset="50%" stopColor="currentColor" stopOpacity="0.1" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          {datacenters.slice(0, -1).map((dc, index) => (
            <line
              key={index}
              x1={dc.x}
              y1={dc.y}
              x2={datacenters[index + 1].x}
              y2={datacenters[index + 1].y}
              stroke="url(#connectionGradient)"
              strokeWidth="1"
              className="text-primary"
            />
          ))}
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
