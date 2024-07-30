import KPHeading from "@/components/ui/KPHeading";
import KPParagraph from "@/components/ui/KPParagraph";
import KPRow from "@/components/ui/KPRow";
import KPSection from "@/components/ui/KPSection";
import Image from "next/image";

function Philosophy() {
  return (
    <KPSection id="philosophy" className="gap-5 p-0 bg-black">
      <KPRow flexDirection="col" alignItems="start" className="flex-1 lg:p-16">
        <KPHeading>Our Philosophy</KPHeading>
        <KPParagraph>
          At Khalifa Partners, our business philosophy is deeply rooted in the timeless wisdom and engineering marvels of the ancient Egyptian pyramids. Just as the pyramids were meticulously designed and built to stand the test of time, we believe in constructing enduring companies that leave a lasting impact. The pyramid is not only our logo but also symbolizes our founders' Egyptian heritage and serves as a powerful metaphor for our approach to business. Like the pyramid builders of old, we meticulously plan, strategize, and execute each step to build successful companies. Our commitment to excellence is driven by our dedication to putting people first, ensuring that the businesses we build are not only successful but also enduring.
        </KPParagraph>
      </KPRow>
      <div className="relative w-[100%] lg:flex-[1.5] aspect-square">
        <Image
          quality={100}
          typeof="image"
          rel="preload"
          unoptimized={false}
          fill
          src="/philosophy.png"
          alt="philosophy"
          priority
        />
      </div>
    </KPSection>
  );
}

export default Philosophy;
