import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes, FC } from "react";

export const kpSectionVariants = cva(
  "relative min-h-screen items-center justify-center overflow-hidden",
  {
    variants: {
      flexDirection: {
        default: "flex",
        col: "flex-col",
      },
    },
    defaultVariants: { flexDirection: "default" },
  }
);

export interface KPSectionProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof kpSectionVariants> {}

const KPSection: FC<KPSectionProps> = ({
  className,
  flexDirection,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        kpSectionVariants({
          className,
          flexDirection,
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
