import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPParagraph from "@/ui/KPParagraph";
import StrategyModelDark from "@/glb-models/StrategyModelDark";
import StrategyModelLight from "@/glb-models/StrategyModelLight";
import KPSection from "@/ui/KPSection";

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
          <KPHeading
            size="default"
            fontWeight="heavy"
            className="text-black dark:text-white"
          >
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
