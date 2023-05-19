import Image from "next/image";
import Link from "next/link";
import KPHeading from "../ui/KPHeading";
import KPRow from "../ui/KPRow";
import KPSection from "../ui/KPSection";

function Intro() {
  return (
    <KPSection>
      <KPRow flexDirection="col" alignItems="end">
        <div className="relative w-full max-w-[125px] lg:max-w-[175px] aspect-square">
          <Image
            priority
            quality={100}
            style={{ objectFit: "fill" }}
            fill
            src="/square.png"
            alt="square"
            typeof="image"
            rel="preload"
          />
        </div>
        <KPHeading className="text-black dark:text-white">
          We diversify our Portfolio by building companies with outstanding
          personalities and supporting them with our know-how, network and
          capital.
        </KPHeading>
      </KPRow>
    </KPSection>
  );
}

export default Intro;
