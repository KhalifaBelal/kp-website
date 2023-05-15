import dynamic from "next/dynamic";
const KPSection = dynamic(() => import("@/ui/KPSection"));
const KPRow = dynamic(() => import("@/ui/KPRow"));
const KPHeading = dynamic(() => import("@/ui/KPHeading"));
const KPParagraph = dynamic(() => import("@/ui/KPParagraph"));
import StrategyModelDark from "@/glb-models/StrategyModelDark";
import StrategyModelLight from "@/glb-models/StrategyModelLight";

interface PrefaceProps {
  title: string;
  text: string;
  model: number;
}

function StrategyStep({ title, text, model }: PrefaceProps) {
  return (
    <KPSection>
      <KPRow>
        <KPRow
          wrapperContainer="disable"
          flexDirection="col"
          alignItems="start"
        >
          <KPHeading size="default" className="text-black dark:text-white">
            {title}
          </KPHeading>
          <KPParagraph>{text}</KPParagraph>
        </KPRow>
        <div className="relative w-full aspect-square dark:hidden">
          <StrategyModelDark model={model} />
        </div>
        <div className="relative w-full aspect-square hidden dark:block">
          <StrategyModelLight model={model} />
        </div>
      </KPRow>
    </KPSection>
  );
}

export default StrategyStep;
