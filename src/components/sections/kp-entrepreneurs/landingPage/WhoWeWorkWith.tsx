import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPParagraph from "@/ui/KPParagraph";
import KPSection from "@/ui/KPSection";
import { KPButton, kpButtonVariants } from "@/components/ui/KPButton";
import Link from "next/link";

function WhoWeWorkWith() {
  return (
    <KPSection id="concept" height={"padding"}>
      <div className='flex flex-col items-center justify-center gap-8'>
        <KPHeading className="text-white">
          Who we work with
        </KPHeading>
        <KPRow className='items-stretch'>
          <KPRow
            wrapperContainer="disable"
            flexDirection="col"
            alignItems="start"
            className='bg-zinc-800 p-6 rounded-md'
          >
            <KPHeading className="text-white">
              Investors
            </KPHeading>
            <KPParagraph>
              We seek investors who share our values and vision for long-term growth. Our selection process is rigorous, ensuring we only partner with those who are passionate about innovation and committed to excellence.
            </KPParagraph>
            <Link
              className={kpButtonVariants({ variant: "outline" })}
              href="https://linktr.ee/baselkhalifa"
              rel="noreferrer"
              target="_blank"
            >
              Let&apos;s Talk
            </Link>
          </KPRow>
          <KPRow
            wrapperContainer="disable"
            flexDirection="col"
            alignItems="start"
            className='bg-zinc-800 p-6 rounded-md'
          >
            <KPHeading className="text-white">
              Talented Individuals
            </KPHeading>
            <KPParagraph>
              We aim to bring in talented individuals in the fields of Project Management, Software Development, Marketing, or Finance who are passionate about building innovative businesses with us.
            </KPParagraph>
            <Link
              className={kpButtonVariants({ variant: "outline" })}
              href="https://linktr.ee/baselkhalifa"
              rel="noreferrer"
              target="_blank"
            >
              Let&apos;s Talk
            </Link>
          </KPRow>
        </KPRow>
      </div>
    </KPSection>
  );
}

export default WhoWeWorkWith;
