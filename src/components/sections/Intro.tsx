import Image from "next/image";
import Link from "next/link";
import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/ui/KPRow";

function Intro() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl mx-auto">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <KPRow flexDirection="col">
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
            <KPHeading size="sm" className="three-d text-black dark:text-white">
              We diversify our{" "}
              <Link
                href="/portfolio"
                className="underline underline-offset-2 text-black dark:text-white"
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
