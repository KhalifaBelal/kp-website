import { FC, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const kpHeadingVariants = cva("leading-tight tracking-tight", {
  variants: {
    size: {
      default: "text-4xl md:text-5xl lg:text-6xl",
      lg: "text-5xl md:text-6xl lg:text-7xl",
      sm: "text-2xl md:text-3xl lg:text-4xl",
    },
    fontWeight: {
      default: "font-semibold",
      normal: "font-normal",
    },
    textColor: {
      default: "text-white",
      black: "text-black",
    },
  },
  defaultVariants: {
    size: "default",
    fontWeight: "default",
    textColor: "default",
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
  textColor,
  ...props
}) => {
  return (
    <h1
      {...props}
      className={cn(kpHeadingVariants({ size, fontWeight, textColor, className }))}
    >
      {children}
    </h1>
  );
};

export default KPHeading;
