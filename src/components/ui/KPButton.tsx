import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, forwardRef, MouseEventHandler } from "react";

const kpButtonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-zinc-400 disabled:pointer-events-none dark:focus:ring-offset-zinc-900",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-100",
        outline:
          "bg-kp-red text-white hover:bg-zinc-800 dark:hover:text-zinc-900 dark:hover:bg-zinc-100 border border-zinc-200 dark:border-zinc-700",
        subtle:
          "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-100",
        ghost:
          "bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:text-zinc-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-zinc-900 dark:text-zinc-100 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface KPButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof kpButtonVariants> {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const KPButton = forwardRef<HTMLButtonElement, KPButtonProps>(
  ({ className, onClick, children, variant, size, ...props }, ref) => {
    return (
      <button
        onClick={onClick}
        className={cn(kpButtonVariants({ variant, size, className }))}
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
