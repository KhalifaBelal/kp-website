import Image from "next/image";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPSection from "@/ui/KPSection";

function Intro() {
  return (
    <KPSection>
      <KPRow flexDirection="col">
        <KPHeading className="text-center">Welcome</KPHeading>
        <KPHeading size="sm" className="text-center">
          Transform your Vision into Reality
        </KPHeading>
      </KPRow>
    </KPSection>
  );
}

export default Intro;
