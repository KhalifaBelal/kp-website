import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";

export const kpSectionVariants = cva(
  "relative h-screen flex items-center justify-center overflow-x-hidden"
);

export interface KPSectionProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof kpSectionVariants> {}

const KPSection: FC<KPSectionProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        kpSectionVariants({
          className,
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
