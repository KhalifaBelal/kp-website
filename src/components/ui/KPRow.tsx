import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";

export const kpRowVariants = cva("relative flex gap-5", {
  variants: {
    flexDirection: {
      default: "flex-row",
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
  },
  defaultVariants: {
    flexDirection: "default",
    alignItems: "default",
    justifyContent: "default",
  },
});

export interface KPRowProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof kpRowVariants> {
  withTitle?: boolean;
}

const KPRow: FC<KPRowProps> = ({
  className,
  children,
  flexDirection,
  alignItems,
  justifyContent,
  withTitle = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        kpRowVariants({
          flexDirection,
          alignItems,
          justifyContent,
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
