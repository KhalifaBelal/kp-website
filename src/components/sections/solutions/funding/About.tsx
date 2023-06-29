import KPParagraph from "@/components/ui/KPParagraph";
import KPSection from "@/components/ui/KPSection";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import Image from "next/image";

function About() {
  return (
    <div className="w-full py-10 bg-kp-red">
      <KPRow flexDirection="col" alignItems="end">
        <KPRow
          wrapperContainer="disable"
          flexDirection="col"
          alignItems="start"
        >
          <KPHeading className="font-extrabold">About Khalifa Partners</KPHeading>
          <KPHeading className="font-extrabold" size="sm">
            At Khalifa Partners, we fuel innovation by connecting ventures with
            funding opportunities. Our extensive investor network and flexible
            funding options empower entrepreneurs like you to focus on what
            truly matters - bringing your ideas to life.
          </KPHeading>
        </KPRow>
      </KPRow>
    </div>
  );
}

export default About;
