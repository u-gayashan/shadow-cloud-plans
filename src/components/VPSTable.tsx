
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const vpsPlans = [
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

export const VPSTable = () => {
  return (
    <Card className="w-full overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-semibold">Plan</TableHead>
              <TableHead className="font-semibold">RAM</TableHead>
              <TableHead className="font-semibold">CPU</TableHead>
              <TableHead className="font-semibold">Storage</TableHead>
              <TableHead className="font-semibold">Bandwidth</TableHead>
              <TableHead className="font-semibold">IPv4</TableHead>
              <TableHead className="font-semibold">Price</TableHead>
              <TableHead className="font-semibold text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vpsPlans.map((plan, index) => (
              <TableRow key={index} className={`hover:bg-muted/30 ${plan.popular ? 'bg-primary/5 border-l-4 border-l-primary' : ''}`}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    {plan.name}
                    {plan.popular && (
                      <Badge variant="default" className="text-xs">
                        Popular
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>{plan.ram}</TableCell>
                <TableCell>{plan.cpu}</TableCell>
                <TableCell>{plan.storage}</TableCell>
                <TableCell>{plan.bandwidth}</TableCell>
                <TableCell>{plan.ipv4}</TableCell>
                <TableCell className="font-semibold">
                  {plan.price}
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </TableCell>
                <TableCell className="text-center">
                  <Button 
                    size="sm" 
                    className={plan.popular ? 'bg-primary hover:bg-primary/90' : ''}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Purchase
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};
