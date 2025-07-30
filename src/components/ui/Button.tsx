"use client";

import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode;
};

export default function Button({
  icon,
  children,
  className,
  color = "red",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        `rounded-md flex items-center gap-2 bg-${color}-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-${color}-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}-600`,
        className
      )}
    >
      {icon}
      {children}
    </button>
  );
}
