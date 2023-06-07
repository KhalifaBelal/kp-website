import { FC, HTMLAttributes } from "react";
import "./ui.css";
import KPHeading from "./KPHeading";
import { cn } from "@/lib/utils";
import { skillsData as Data } from "@/lib/weWorkWith/expertsPage/skillsData";

interface KPAnimBlurbProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  iconIndex: number;
}

const KPAnimBlurb: FC<KPAnimBlurbProps> = ({
  title,
  description,
  iconIndex,
  className,
  ...props
}) => {
  return (
    <div className={cn("card min-w-[320px]", className)} {...props}>
      <span className="icon">{Data[iconIndex].icon}</span>
      <KPHeading size="sm">{title}</KPHeading>
      <p>{description}</p>
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

export default KPAnimBlurb;
