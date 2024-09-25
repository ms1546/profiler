import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps {
  variant?: "primary" | "secondary" | "info" | "warning" | "danger";
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ variant = "primary", children }) => {
  const baseClasses = "inline-block px-3 py-1 rounded-full text-sm font-medium";
  const variantClasses = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    info: "bg-blue-100 text-blue-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
  };

  return <span className={cn(baseClasses, variantClasses[variant])}>{children}</span>;
};

export { Badge };
