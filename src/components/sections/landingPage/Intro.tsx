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
          We diversify our Portfolio by building companies with outstanding
          personalities and supporting them with our know-how, network and
          capital.
        </KPHeading>
      </KPRow>
    </KPSection>
  );
}

export default Intro;