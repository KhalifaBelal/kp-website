import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef, MouseEventHandler } from "react";

const kpButtonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 focus:ring-zinc-400 disabled:pointer-events-none focus:ring-offset-zinc-900",
  {
    variants: {
      variant: {
        default: "bg-zinc-200 text-zinc-900 hover:bg-zinc-100",
        outline:
          "bg-kp-red text-white hover:text-zinc-900 hover:bg-zinc-100 border border-zinc-700",
        subtle: "hover:bg-zinc-200 bg-zinc-700 text-zinc-100",
        ghost:
          "bg-transparent hover:bg-zinc-800 text-zinc-400 data-[state=open]:bg-transparent",
        link: "bg-transparent underline-offset-4 hover:underline text-zinc-100 hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-sm",
        lg: "h-11 px-8 rounded-sm",
      },
      fullWidth: {
        default: "",
        enabled: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: "default",
    },
  }
);

export interface KPButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof kpButtonVariants> {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const KPButton = forwardRef<HTMLButtonElement, KPButtonProps>(
  (
    { className, onClick, children, variant, size, fullWidth, ...props },
    ref
  ) => {
    return (
      <button
        onClick={onClick}
        className={cn(
          kpButtonVariants({ variant, size, fullWidth, className })
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
KPButton.displayName = "Button";

export { KPButton, kpButtonVariants };
