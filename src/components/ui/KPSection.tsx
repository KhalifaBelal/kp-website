import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes, FC } from "react";

export const kpSectionVariants = cva(
  "relative min-h-screen overflow-hidden flex py-32",
  {
    variants: {
      flexDirection: {
        default: "flex-col lg:flex-row",
        col: "flex-col",
      },
      alignItems: {
        default: "items-center",
        start: "items-start",
        end: "items-end",
      },
      justifyContent: {
        default: "justify-center",
        start: "justify-start",
        end: "justify-end",
        between: "justify-between",
      },
    },
    defaultVariants: {
      flexDirection: "default",
      alignItems: "default",
      justifyContent: "default",
    },
  }
);

export interface KPSectionProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof kpSectionVariants> {}

const KPSection: FC<KPSectionProps> = ({
  className,
  flexDirection,
  alignItems,
  justifyContent,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        kpSectionVariants({
          className,
          flexDirection,
          alignItems,
          justifyContent,
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
