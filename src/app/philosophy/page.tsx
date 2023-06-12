import ContactApproach from "@/components/contactApproach";
import Footer from "@/components/Footer";
import KPParagraph from "@/components/ui/KPParagraph";
import KPSection from "@/components/ui/KPSection";
import DataAccordion from "@/components/DataAccordion";
import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/components/ui/KPRow";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khalifa Partners | Philosophy",
  description: "Discover our Hall of Partners.",
};

export default function page() {
  return (
    <>
      <KPSection>
        <KPRow flexDirection="col" alignItems="start" className="gap-16">
          <KPHeading>Our Business Philosophy</KPHeading>
          <KPParagraph>
            At Khalifa Partners, our business philosophy is rooted in the
            timeless wisdom and engineering marvels of the ancient Egyptian
            pyramids. Just as the pyramids were meticulously designed and built
            to stand the test of time, we believe in constructing enduring
            companies that leave a lasting impact. <br />
            <br /> The pyramid is not only our logo; it symbolizes our founders&apos;
            Egyptian heritage and serves as a powerful metaphor for our approach
            to business. Like the pyramid builders of old, we meticulously plan,
            strategize, and execute each step of building successful companies.
          </KPParagraph>
        </KPRow>
      </KPSection>
      <KPSection className="bg-zinc-100">
        <KPRow flexDirection="col" alignItems="start" className="gap-16">
          <DataAccordion item={7} />
        </KPRow>
      </KPSection>
      <ContactApproach>
        <KPParagraph>
          Just as the pyramids stand as architectural marvels, we aim to create
          business marvels that inspire and elevate. Through our business
          philosophy, we honor our founders&apos; Egyptian heritage and draw
          inspiration from the ancient builders who left an indelible mark on
          history.
          <br />
          <br /> Join us on our journey as we construct extraordinary companies,
          leaving a legacy that stands the test of time. Together, we build the
          future with the strength, precision, and enduring spirit of the
          pyramids.
        </KPParagraph>
      </ContactApproach>

      <Footer />
    </>
  );
}
