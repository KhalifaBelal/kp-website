import WeWorkWithAccordion from "@/components/weWorkWith/WeWorkWithAccordion";
import KPHeading from "@/components/ui/KPHeading";
import KPParagraph from "@/components/ui/KPParagraph";
import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";

function SkillsLeaders() {
  return (
    <KPSection className="bg-zinc-100">
      <KPRow flexDirection="col" alignItems="start" className="gap-16">
        <KPRow
          wrapperContainer="disable"
          flexDirection="col"
          alignItems="start"
        >
          <KPHeading className="text-black">
            Khalifa Partners - Where Innovation Meets Ambition
          </KPHeading>
          <KPHeading size="sm" className="text-black">
            Take the leap, seize the opportunity, and let us empower you to
            redefine success.
          </KPHeading>
          <KPParagraph className="text-black">
            At Khalifa Partners, we believe in empowering managers to focus on
            the daily operations of their business without the burden of
            managing specific fields of work. That&apos;s why we provide a unique
            opportunity where our resources are dedicated to offering the
            following skills, allowing you to excel in your core
            responsibilities:
          </KPParagraph>
        </KPRow>

        <WeWorkWithAccordion item={1} />
      </KPRow>
    </KPSection>
  );
}

export default SkillsLeaders;
