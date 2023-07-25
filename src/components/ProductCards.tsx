"use client";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/KPCard";
import { KPButton, kpButtonVariants } from "./ui/KPButton";
import AnimatedCard from "./card/AnimatedCard";
import { marketplaceData as Data } from "@/lib/kp-invest/marketplaceData";
import { HTMLAttributes, ReactNode } from "react";
import KPRow from "./ui/KPRow";

type CardProps = React.ComponentProps<typeof Card>;

interface CardCustomProps extends CardProps, HTMLAttributes<HTMLDivElement> {
  cardTitle: string;
  cardDescription: string;
  productsInfo: Array<{ title: string; description?: string }>;
  children?: ReactNode;
}

export function ProductCards({
  cardTitle,
  cardDescription,
  productsInfo,
  className,
  children,
  ...props
}: CardCustomProps) {
  return (
    <Card className={cn(className)} {...props}>
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <KPRow wrapperContainer={"disable"}>
          <div className="flex-1">
            {productsInfo.map((info, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-kp-red" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {info.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {children}
        </KPRow>
      </CardContent>
      {/* <CardFooter>
        <KPButton className={kpButtonVariants({ variant: "subtle" })}>
          Read more
        </KPButton>
      </CardFooter> */}
    </Card>
  );
}
