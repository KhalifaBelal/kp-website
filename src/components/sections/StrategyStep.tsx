import dynamic from "next/dynamic";
const StrategyModelDark = dynamic(
  () => import("@/glb-models/StrategyModelDark")
);
const StrategyModelLight = dynamic(
  () => import("@/glb-models/StrategyModelLight")
);
import KPHeading from "../ui/KPHeading";
import KPParagraph from "../ui/KPParagraph";
import KPRow from "../ui/KPRow";
import KPSection from "../ui/KPSection";

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
