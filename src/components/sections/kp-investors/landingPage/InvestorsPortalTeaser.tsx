import { kpButtonVariants } from "@/components/ui/KPButton";
import KPParagraph from "@/components/ui/KPParagraph";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import Link from "next/link";

function InvestorsPortalTeaser() {
  return (
    <div className="w-full py-10 bg-gradient-to-r to-kp-red via-red-900 from-zinc-800">
      <KPRow flexDirection="col" alignItems="start">
        <KPHeading className="text-white" size="lg">COMING SOON</KPHeading>
        <KPHeading className="text-white">Investors Portal</KPHeading>
        <KPParagraph className="text-zinc-300">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </KPParagraph>
      </KPRow>
    </div>
  );
}

export default InvestorsPortalTeaser;
