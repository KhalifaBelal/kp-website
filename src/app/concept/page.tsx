import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));
import KPParagraph from "@/components/ui/KPParagraph";
import ContactApproach from "@/components/contactApproach";
import ConceptIntro from "@/components/sections/conceptPage/ConceptIntro";
import ConceptSteps from "@/components/sections/conceptPage/ConceptSteps";

export default function page() {
  return (
    <>
      <ConceptIntro />
      <ConceptSteps />
      <ContactApproach>
        <KPParagraph>
          <span className="font-semibold">Contact us</span> today to schedule a
          consultation and discover how Khalifa Partners can accelerate your
          journey towards success.
        </KPParagraph>
      </ContactApproach>

      <Footer />
    </>
  );
}
