import { FC, HTMLAttributes, ReactNode } from "react";
import "./ui.css";
import KPHeading from "./KPHeading";
import { cn } from "@/lib/utils";
import KPParagraph from "./KPParagraph";
import KPRow from "./KPRow";

interface BlurbProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon: ReactNode;
}

const Blurb: FC<BlurbProps> = ({
  title,
  description,
  icon,
  className,
  ...props
}) => {
  return (
    <div
      className={cn("card flex-1", className)}
      {...props}
    >
      <KPRow alignItems="start" flexDirection="col" wrapperContainer="disable">
        <span className="icon">{icon}</span>
        <KPHeading size="sm">{title}</KPHeading>
        <KPParagraph>{description}</KPParagraph>
      </KPRow>
      <div className="shine" />
      <div className="background">
        <div className="tiles">
          <div className="tile tile-1" />
          <div className="tile tile-2" />
          <div className="tile tile-3" />
          <div className="tile tile-4" />

          <div className="tile tile-5" />
          <div className="tile tile-6" />
          <div className="tile tile-7" />
          <div className="tile tile-8" />

          <div className="tile tile-9" />
          <div className="tile tile-10" />
        </div>

        <div className="line line-1" />
        <div className="line line-2" />
        <div className="line line-3" />
      </div>
    </div>
  );
};

export default Blurb;
