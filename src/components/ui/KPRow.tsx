import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";

export const kpRowVariants = cva("relative flex mx-auto max-w-6xl", {
  variants: {
    variant: { default: "gap-5", intro: "gap-10 max-w-2xl text-center" },
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
    },
    container: { default: "container", disable: "" },
  },
  defaultVariants: {
    variant: "default",
    flexDirection: "default",
    alignItems: "default",
    justifyContent: "default",
    container: "default"
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
  container,
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
          container,
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
