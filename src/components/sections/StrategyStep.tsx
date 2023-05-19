import KPHeading from "../ui/KPHeading";
import KPParagraph from "../ui/KPParagraph";
import KPRow from "../ui/KPRow";
import KPSection from "../ui/KPSection";
import StrategyModelLight from "@/glb-models/StrategyModelLight";
import StrategyModelDark from "@/glb-models/StrategyModelDark";

interface StrategyStepProps {
  title: string;
  text: string;
  model: number;
}

function StrategyStep({ title, text, model }: StrategyStepProps) {
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
