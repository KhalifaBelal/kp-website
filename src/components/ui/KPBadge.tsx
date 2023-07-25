import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const kpBadgeVariants = cva(
  "inline-flex items-center rounded-md border w-10 h-10 flex items-center justify-center p-2 text-2xl font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-kp-red text-kp-red-foreground hover:bg-kp-red/80 text-white",
        secondary:
          "border-transparent bg-zinc-400 text-zinc-400-foreground hover:bg-zinc-400/80",
        destructive:
          "border-transparent bg-zinc-200 text-zinc-200-foreground hover:bg-zinc-200/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface KPBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof kpBadgeVariants> {}

function KPBadge({ className, variant, ...props }: KPBadgeProps) {
  return (
    <div className={cn(kpBadgeVariants({ variant }), className)} {...props} />
  );
}

export { KPBadge, kpBadgeVariants };
