import KPHeading from "@/components/ui/KPHeading";
import KPParagraph from "@/components/ui/KPParagraph";
import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";

function InvestIntro() {
  return (
    <KPSection>
      <KPRow variant="intro" flexDirection="col">
        <KPParagraph>We work with investors</KPParagraph>
        <KPHeading size="sm" fontWeight="normal">
          <span className="font-semibold">Unlocking Potential:</span> Invest in
          the Khalifa Partners Investment Fund Are you ready to be part of a
          transformative journey, fueling the growth of innovative startups and
          businesses? Khalifa Partners invites you to invest in our
          groundbreaking investment fund, where we channel capital towards
          high-potential ventures that are poised to disrupt industries and
          shape the future.
        </KPHeading>
      </KPRow>
    </KPSection>
  );
}

export default InvestIntro;
