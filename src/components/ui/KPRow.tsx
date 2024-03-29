import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";

export const kpRowVariants = cva("relative flex w-full gap-5", {
  variants: {
    variant: { default: "max-w-6xl", fullWidth: "max-w-screen" },
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
    wrapperContainer: { default: "container mx-auto", disable: "" },
  },
  defaultVariants: {
    variant: "default",
    flexDirection: "default",
    alignItems: "default",
    justifyContent: "default",
    wrapperContainer: "default",
  },
});

export interface KPRowProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof kpRowVariants> {}

const KPRow: FC<KPRowProps> = ({
  className,
  children,
  variant,
  flexDirection,
  alignItems,
  justifyContent,
  wrapperContainer,
  ...props
}) => {
  return (
    <div
      className={cn(
        kpRowVariants({
          variant,
          flexDirection,
          alignItems,
          justifyContent,
          wrapperContainer,
          className,
        })
      )}
      {...props}
    >
      {children}
    </div>
  );
};
KPRow.displayName = "Div";

export default KPRow;
