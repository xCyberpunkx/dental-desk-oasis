
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  children?: React.ReactNode;
}

export function ServiceCard({ title, description, icon: Icon, className, children }: ServiceCardProps) {
  return (
    <Card className={cn(
      "group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full",
      "border border-gray-200 bg-white/50 backdrop-blur-sm",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-dental-100/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <CardHeader className="relative">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-dental-100/50 text-dental-600">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl font-semibold text-purple-900">{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative space-y-2">
        <CardDescription className="text-gray-700">{description}</CardDescription>
        {children}
      </CardContent>
    </Card>
  );
}
