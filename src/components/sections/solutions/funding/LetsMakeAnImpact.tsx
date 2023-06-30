import Image from "next/image";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPSection from "@/ui/KPSection";
import KPParagraph from "@/components/ui/KPParagraph";
import { KPButton, kpButtonVariants } from "@/components/ui/KPButton";

function LetsMakeAnImpact() {
  return (
    <KPSection className="bg-zinc-100">
      <KPRow flexDirection="col" alignItems="start">
        <KPHeading textColor="black">Let&apos;s make an Impact</KPHeading>
        <KPHeading textColor="black" size="sm">
          Contact us today
        </KPHeading>
        <KPParagraph textColor="black">
          Ready to transform your ideas into thriving businesses? Contact us now
          to discuss how Khalifa Partners can fuel your entrepreneurial journey.
          Together, we can make a lasting impact in the world of innovation and
          business.
        </KPParagraph>
        <KPButton className={kpButtonVariants({ variant: "outline" })}>
          Contact us
        </KPButton>
      </KPRow>
    </KPSection>
  );
}

export default LetsMakeAnImpact;
