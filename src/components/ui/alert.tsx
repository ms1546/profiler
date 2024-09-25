import * as React from "react";
import { cn } from "@/lib/utils";

export interface AlertProps {
  variant?: "info" | "success" | "warning" | "danger";
  children: React.ReactNode;
}

const AlertTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="font-bold">{children}</div>
);

const AlertDescription: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="text-sm">{children}</div>;

const Alert: React.FC<AlertProps> = ({ variant = "info", children }) => {
  const baseClasses =
    "p-4 rounded-md border flex items-start space-x-2 max-w-md mx-auto mb-4";
  const variantClasses = {
    info: "bg-blue-100 border-blue-500 text-blue-700",
    success: "bg-green-100 border-green-500 text-green-700",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
    danger: "bg-red-100 border-red-500 text-red-700",
  };

  return (
    <div className={cn(baseClasses, variantClasses[variant])}>
      <div>{children}</div>
    </div>
  );
};

export { Alert, AlertTitle, AlertDescription };
