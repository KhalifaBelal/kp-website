import { kpButtonVariants } from "@/components/ui/KPButton";
import KPParagraph from "@/components/ui/KPParagraph";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import Link from "next/link";

function LatestInvestments() {
  return (
    <div className="w-full py-10 bg-zinc-100 ">
      <KPRow flexDirection="col" alignItems="start">
        <KPHeading className="text-black">
          Stay Ahead of Opportunities: <br /> Subscribe to Our Newsletter
        </KPHeading>
        <KPParagraph className="text-zinc-700">
          Ready to stay ahead of the investment game? Don't miss out on the
          latest and most lucrative opportunities! Subscribe to our newsletter
          and be the first to know about exciting new investments. Stay
          informed, make informed decisions, and unlock your path to financial
          prosperity. Join our community of savvy investors today!
        </KPParagraph>
        <Link href="" className={kpButtonVariants({ variant: "outline" })}>
          Apply for Newsletter
        </Link>
      </KPRow>
    </div>
  );
}

export default LatestInvestments;
