import * as React from "react";
// import { cn } from "@/lib/utils";

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg max-w-lg mx-auto">
        {children}
        <button onClick={onClose} className="mt-4 text-sm text-gray-600">
          Close
        </button>
      </div>
    </div>
  );
};

export const DialogTrigger: React.FC<React.PropsWithChildren<{ asChild?: boolean }>> = ({
    children,
  }) => {
    return <>{children}</>;
  };

export const DialogContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <>{children}</>;

export const DialogHeader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <>{children}</>;

export const DialogTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <h2 className="text-xl font-semibold">{children}</h2>;

export const DialogDescription: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <p className="text-sm">{children}</p>;

export const DialogFooter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="mt-4">{children}</div>;

export { Dialog };
