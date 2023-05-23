import KPHeading from "@/ui/KPHeading";
import KPParagraph from "@/ui/KPParagraph";
import KPRow from "@/ui/KPRow";
import KPSection from "@/ui/KPSection";
import StrategyModel from "@/glb-models/StrategyModel";

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
          <KPHeading size="default" className="text-white">
            {title}
          </KPHeading>
          <KPParagraph>{text}</KPParagraph>
        </KPRow>
        <div className="relative w-full aspect-square">
          <StrategyModel model={model} />
        </div>
      </KPRow>
    </KPSection>
  );
}

export default StrategyStep;
