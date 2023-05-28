import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));
import KPParagraph from "@/components/ui/KPParagraph";
import ContactApproach from "@/components/contactApproach";
import ConceptIntro from "@/components/sections/conceptPage/ConceptIntro";
import QualificationProcess from "@/components/sections/conceptPage/QualificationProcess";

export default function page() {
  return (
    <>
      <ConceptIntro />
      <QualificationProcess />
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
