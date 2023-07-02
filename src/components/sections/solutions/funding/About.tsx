import KPParagraph from "@/components/ui/KPParagraph";
import KPSection from "@/components/ui/KPSection";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import Image from "next/image";

function About() {
  return (
    <div className="w-full py-10 bg-zinc-900">
      <KPRow flexDirection="col" alignItems="end">
        <KPRow
          wrapperContainer="disable"
          flexDirection="col"
          alignItems="start"
        >
          <KPHeading>About Khalifa Partners</KPHeading>
          <KPParagraph>
            At Khalifa Partners, we fuel innovation by connecting ventures with
            funding opportunities. Our extensive investor network and flexible
            funding options empower entrepreneurs like you to focus on what
            truly matters - bringing your ideas to life.
          </KPParagraph>
        </KPRow>
      </KPRow>
    </div>
  );
}

export default About;
