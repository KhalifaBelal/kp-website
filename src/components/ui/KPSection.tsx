import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes, FC } from "react";

export const kpSectionVariants = cva("relative overflow-hidden flex py-36", {
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
    height: {
      default: "min-h-screen",
      padding: "py-20",
      auto: "py-10 lg:py-0",
    },
  },
  defaultVariants: {
    flexDirection: "default",
    alignItems: "default",
    justifyContent: "default",
    height: "default",
  },
});

export interface KPSectionProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof kpSectionVariants> {}

const KPSection: FC<KPSectionProps> = ({
  className,
  flexDirection,
  alignItems,
  justifyContent,
  height,
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
          height,
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
