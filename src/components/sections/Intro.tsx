import Image from "next/image";
import Link from "next/link";
import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/ui/KPRow";

function Intro() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="h-full flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <KPRow variant="intro" flexDirection="col" alignItems="end">
            <div className="relative w-full max-w-[125px] lg:max-w-[175px] aspect-square">
              <Image
                priority
                quality={100}
                style={{ objectFit: "contain" }}
                fill
                src="/square.png"
                alt="square"
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
              by building companies with outstanding personalities and
              supporting them with our know-how, network and capital.
            </KPHeading>
          </KPRow>
        </div>
      </div>
    </div>
  );
}

export default Intro;
