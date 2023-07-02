import Image from "next/image";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPSection from "@/ui/KPSection";

function Intro() {
  return (
    <KPSection className="bg-zinc-100">
      <KPRow flexDirection="col">
        <KPHeading className="text-center text-black">Welcome</KPHeading>
        <KPHeading size="sm" className="text-center text-black">
          Transform your Vision into Reality
        </KPHeading>
      </KPRow>
    </KPSection>
  );
}

export default Intro;
