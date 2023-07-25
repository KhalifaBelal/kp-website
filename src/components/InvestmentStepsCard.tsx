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
import KPHeading from "./ui/KPHeading";
import KPParagraph from "./ui/KPParagraph";

type CardProps = React.ComponentProps<typeof Card>;

interface CardCustomProps extends CardProps {
  cardTitle: string;
  investmentSteps: Array<{ title: string }>;
}

export function InvestmentStepsCard({
  cardTitle,
  investmentSteps,
  className,
  ...props
}: CardCustomProps) {
  return (
    <Card className={cn( className)} {...props}>
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {investmentSteps.map((step, index) => (
            <div
              key={index}
              className="mb-2 flex items-start pb-4 last:mb-0 last:pb-0"
            >
              <div className="space-y-1">
                <KPParagraph className="text-black" size="sm">{step.title}</KPParagraph>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <KPButton className={kpButtonVariants({ variant: "subtle" })}>
          Contact us
        </KPButton>
      </CardFooter>
    </Card>
  );
}
