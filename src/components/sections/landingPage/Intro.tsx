import Image from "next/image";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPSection from "@/ui/KPSection";

function Intro() {
  return (
    <KPSection>
      <KPRow flexDirection="col" alignItems="end">
        <Image
          priority
          quality={100}
          src="/square.png"
          alt="square"
          typeof="image"
          rel="preload"
          unoptimized={false}
          width={150}
          height={150}
          className="aspect-square"
        />
        <KPHeading className="text-white">
          We diversify our <span className="text-kp-red">Portfolio</span> by
          building companies with{" "}
          <span className="text-kp-red">outstanding personalities</span>.
        </KPHeading>
      </KPRow>
    </KPSection>
  );
}

export default Intro;
