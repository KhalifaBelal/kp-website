import { FC, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const kpHeadingVariants = cva("text-white leading-tight tracking-tight", {
  variants: {
    size: {
      default: "text-4xl md:text-5xl lg:text-6xl",
      lg: "text-5xl md:text-6xl lg:text-7xl",
      sm: "text-2xl md:text-3xl lg:text-4xl",
    },
    fontWeight: {
      default: "font-bold",
      normal: "font-normal",
    },
  },
  defaultVariants: {
    size: "default",
    fontWeight: "default",
  },
});

interface KPHeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof kpHeadingVariants> {}

const KPHeading: FC<KPHeadingProps> = ({
  children,
  className,
  size,
  fontWeight,
  ...props
}) => {
  return (
    <h1
      {...props}
      className={cn(kpHeadingVariants({ size, fontWeight, className }))}
    >
      {children}
    </h1>
  );
};

export default KPHeading;
