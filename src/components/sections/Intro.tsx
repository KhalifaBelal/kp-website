import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
const KPSection = dynamic(() => import("@/ui/KPSection"));
const KPRow = dynamic(() => import("@/ui/KPRow"));
const KPHeading = dynamic(() => import("@/ui/KPHeading"));

function Intro() {
  return (
    <KPSection>
      <KPRow flexDirection="col" alignItems="end">
        <div className="relative w-full max-w-[125px] lg:max-w-[175px] aspect-square">
          <Image
            priority
            quality={100}
            style={{ objectFit: "contain" }}
            fill
            src="/square.png"
            alt="square"
            width={100}
            height={100}
          />
        </div>
        <KPHeading size="default" className="text-black dark:text-white">
          We diversify our{" "}
          <Link
            href="/portfolio"
            className="underline underline-offset-2 text-kp-red"
          >
            Portfolio
          </Link>{" "}
          by building companies with outstanding personalities and supporting
          them with our know-how, network and capital.
        </KPHeading>
      </KPRow>
    </KPSection>
  );
}

export default Intro;
