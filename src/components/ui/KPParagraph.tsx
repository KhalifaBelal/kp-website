import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { AnimationEventHandler, HTMLAttributes, forwardRef } from "react";

export const kpParagraphVariants = cva("max-w-prose mb-2", {
  variants: {
    size: {
      default: "text-base sm:text-lg",
      sm: "text-sm sm:text-base",
    },
    textColor: {
      default: "text-zinc-300",
      black: "text-zinc-700",
    },
  },
  defaultVariants: {
    size: "default",
    textColor: "default",
  },
});

interface KPParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof kpParagraphVariants> {}

const KPParagraph = forwardRef<HTMLParagraphElement, KPParagraphProps>(
  ({ className, size, textColor, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(kpParagraphVariants({ size, textColor, className }))}
      >
        {children}
      </p>
    );
  }
);

KPParagraph.displayName = "Paragraph";

export default KPParagraph;
