
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Server, 
  HardDrive, 
  Cpu, 
  Network, 
  MapPin, 
  Shield,
  Power,
  RotateCcw,
  Play,
  Square,
  RefreshCw,
  Settings,
  Activity,
  Globe
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const serverInfo = {
    hostname: "racknerd-cfcfea8",
    ip: "107.173.53.148",
    status: "Online",
    os: "AlmaLinux 8 64 Bit",
    virtualization: "KVM",
    node: "NYRN233KVM",
    uptime: "45 days, 12 hours"
  };

  const systemSpecs = {
    memory: { used: 1, total: 1, unit: "GB" },
    swap: { used: 0, total: 1, unit: "GB" },
    diskSpace: { used: 3.96, total: 20, unit: "GB" },
    bandwidth: { used: 64.73, total: 1950, unit: "GB" },
    ipv4: 1,
    ipv6: 0
  };

  const usagePercentages = {
    disk: Math.round((systemSpecs.diskSpace.used / systemSpecs.diskSpace.total) * 100),
    bandwidth: Math.round((systemSpecs.bandwidth.used / systemSpecs.bandwidth.total) * 100),
    memory: Math.round((systemSpecs.memory.used / systemSpecs.memory.total) * 100)
  };

  const controlActions = [
    { id: "reboot", label: "Reboot", icon: RotateCcw, variant: "outline", color: "text-blue-600" },
    { id: "shutdown", label: "Shutdown", icon: Square, variant: "outline", color: "text-red-600" },
    { id: "boot", label: "Boot", icon: Play, variant: "outline", color: "text-green-600" },
    { id: "reinstall", label: "Reinstall", icon: RefreshCw, variant: "outline", color: "text-orange-600" },
    { id: "vnc", label: "VNC", icon: Globe, variant: "outline", color: "text-purple-600" },
    { id: "rescue", label: "Rescue", icon: Shield, variant: "outline", color: "text-indigo-600" }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-4 min-w-0">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate("/")}
                className="gap-2 shrink-0"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Back</span>
              </Button>
              <div className="h-6 w-px bg-border" />
              <div className="min-w-0">
                <h1 className="text-lg md:text-2xl font-bold truncate">{serverInfo.hostname}</h1>
                <p className="text-xs md:text-sm text-muted-foreground truncate">({serverInfo.ip})</p>
              </div>
            </div>
            <Button size="sm" variant="outline" className="gap-2 shrink-0">
              <RefreshCw className="w-4 h-4" />
              <span className="hidden sm:inline">Refresh</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 py-6">
        <div className="max-w-7xl mx-auto space-y-4 md:space-y-6">
          {/* Status Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <Card>
              <CardContent className="p-3 md:p-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shrink-0"></div>
                  <div className="min-w-0">
                    <p className="text-xs md:text-sm font-medium">Status</p>
                    <p className="text-sm md:text-lg font-bold text-green-600 truncate">{serverInfo.status}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-3 md:p-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <Server className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs md:text-sm font-medium">OS</p>
                    <p className="text-xs md:text-sm font-semibold truncate">{serverInfo.os}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-3 md:p-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <Network className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs md:text-sm font-medium">IPv4</p>
                    <p className="text-xs md:text-sm font-semibold truncate">{systemSpecs.ipv4}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-3 md:p-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <Activity className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs md:text-sm font-medium">Uptime</p>
                    <p className="text-xs md:text-sm font-semibold truncate">{serverInfo.uptime}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* System Resources */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">System Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Memory Usage</span>
                    <span className="text-sm text-muted-foreground">
                      {systemSpecs.memory.used} / {systemSpecs.memory.total} {systemSpecs.memory.unit}
                    </span>
                  </div>
                  <Progress value={usagePercentages.memory} className="h-2" />
                  <p className="text-xs text-muted-foreground">{usagePercentages.memory}% used</p>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Disk Usage</span>
                    <span className="text-sm text-muted-foreground">
                      {systemSpecs.diskSpace.used} / {systemSpecs.diskSpace.total} {systemSpecs.diskSpace.unit}
                    </span>
                  </div>
                  <Progress value={usagePercentages.disk} className="h-2" />
                  <p className="text-xs text-muted-foreground">{usagePercentages.disk}% used</p>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Bandwidth Usage</span>
                    <span className="text-sm text-muted-foreground">
                      {systemSpecs.bandwidth.used} / {systemSpecs.bandwidth.total} {systemSpecs.bandwidth.unit}
                    </span>
                  </div>
                  <Progress value={usagePercentages.bandwidth} className="h-2" />
                  <p className="text-xs text-muted-foreground">{usagePercentages.bandwidth}% used</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Server Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Hostname</p>
                    <p className="font-medium">{serverInfo.hostname}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">IP Address</p>
                    <p className="font-medium">{serverInfo.ip}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Virtualization</p>
                    <p className="font-medium">{serverInfo.virtualization}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Node</p>
                    <p className="font-medium">{serverInfo.node}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">IPv6 Address</p>
                    <p className="font-medium">{systemSpecs.ipv6}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Swap</p>
                    <p className="font-medium">{systemSpecs.swap.used} / {systemSpecs.swap.total} {systemSpecs.swap.unit}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Control Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Server Controls</CardTitle>
              <CardDescription>
                Manage your server with these control options
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
                {controlActions.map((action) => (
                  <Button
                    key={action.id}
                    variant={action.variant as any}
                    className="h-16 md:h-20 flex-col gap-1 md:gap-2 hover:shadow-md transition-all"
                  >
                    <action.icon className={`w-4 h-4 md:w-6 md:h-6 ${action.color}`} />
                    <span className="text-xs font-medium">{action.label}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Advanced Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Management</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="settings" className="w-full">
                <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
                  <TabsTrigger value="settings" className="text-xs md:text-sm">Settings</TabsTrigger>
                  <TabsTrigger value="cdrom" className="text-xs md:text-sm">CD-ROM</TabsTrigger>
                  <TabsTrigger value="drivers" className="text-xs md:text-sm">Drivers</TabsTrigger>
                  <TabsTrigger value="hostname" className="text-xs md:text-sm">Hostname</TabsTrigger>
                  <TabsTrigger value="network" className="text-xs md:text-sm">Network</TabsTrigger>
                  <TabsTrigger value="api" className="text-xs md:text-sm">API</TabsTrigger>
                </TabsList>
                
                <TabsContent value="settings" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">APIC</label>
                        <select className="w-full mt-1 p-2 border rounded-md bg-background">
                          <option>On</option>
                          <option>Off</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium">ACPI</label>
                        <select className="w-full mt-1 p-2 border rounded-md bg-background">
                          <option>On</option>
                          <option>Off</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Boot Order</label>
                        <select className="w-full mt-1 p-2 border rounded-md bg-background">
                          <option>(1) Hard Disk (2) CD-ROM</option>
                          <option>(1) CD-ROM (2) Hard Disk</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium">Network Card</label>
                        <select className="w-full mt-1 p-2 border rounded-md bg-background">
                          <option>Virtio</option>
                          <option>E1000</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="cdrom" className="mt-6">
                  <p className="text-muted-foreground">CD-ROM management options will be available here.</p>
                </TabsContent>
                
                <TabsContent value="drivers" className="mt-6">
                  <p className="text-muted-foreground">Driver configuration options will be available here.</p>
                </TabsContent>
                
                <TabsContent value="hostname" className="mt-6">
                  <p className="text-muted-foreground">Hostname configuration options will be available here.</p>
                </TabsContent>
                
                <TabsContent value="network" className="mt-6">
                  <p className="text-muted-foreground">Network configuration options will be available here.</p>
                </TabsContent>
                
                <TabsContent value="api" className="mt-6">
                  <p className="text-muted-foreground">API configuration options will be available here.</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
