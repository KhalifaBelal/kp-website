import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPParagraph from "@/ui/KPParagraph";
import Pyramid from "@/components/glb-models/Pyramid";
import KPSection from "@/ui/KPSection";
import StrategyModelDark from '@/components/glb-models/StrategyModel';

function Partnership() {
  return (
    <KPSection id="concept" height={"auto"}>
      <div className='pt-32'>
        <KPHeading className="text-white text-center">How We Form Partnerships</KPHeading>
        <KPRow className='flex items-start justify-center gap-32 pb-32 pt-8'>
          <div className='flex flex-col gap-6 items-center justify-center'>
            <StrategyModelDark model={0} />
            <KPHeading className="text-white text-center">The Screening Stage</KPHeading>
            <KPParagraph className='text-center max-w-[520px]'>
              We conduct 1:1 meetings to identify synergies and ensure that our personal and business philosophies align.
            </KPParagraph>
          </div>
          <div className='flex flex-col gap-6 items-center justify-center'>
            <StrategyModelDark model={1} />
            <KPHeading className="text-white text-center">The Strategy Stage</KPHeading>
            <KPParagraph className='text-center max-w-[520px]'>
              We develop a comprehensive strategy on how we can collaborate to form the best possible deal for all parties and continue building exciting ventures.
            </KPParagraph>
          </div>
          <div className='flex flex-col gap-6 items-center justify-center'>
            <StrategyModelDark model={2} />
            <KPHeading className="text-white text-center">The Partnership Stage</KPHeading>
            <KPParagraph className='text-center max-w-[520px]'>
              This stage marks both the end of the preliminary process and the beginning of something great. We strive to uphold long-lasting partnerships.
            </KPParagraph>
          </div>
        </KPRow>
      </div>
    </KPSection>
  );
}

export default Partnership;
