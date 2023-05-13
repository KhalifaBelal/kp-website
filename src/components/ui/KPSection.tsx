import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";

export const kpSectionVariants = cva(
  "relative flex items-center justify-center overflow-hidden",
  {
    variants: { variant: { default: "min-h-screen", autoHeight: "h-auto py-10 lg:py-0" } },
    defaultVariants: { variant: "default" },
  }
);

export interface KPSectionProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof kpSectionVariants> {}

const KPSection: FC<KPSectionProps> = ({
  className,
  variant,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        kpSectionVariants({
          className,
          variant,
        })
      )}
      {...props}
    >
      {children}
    </div>
  );
};
KPSection.displayName = "Div";

export default KPSection;
