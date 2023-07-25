import { kpButtonVariants } from "@/components/ui/KPButton";
import KPParagraph from "@/components/ui/KPParagraph";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";

function InvestorsPortalTeaser() {
  return (
    <div className="w-full py-10 bg-gradient-to-r to-kp-red via-red-900 from-zinc-800">
      <KPRow flexDirection="col" alignItems="start">
        <KPHeading className="text-white" fontWeight="normal">
          Coming Soon: Elevate Your Investment Experience!
        </KPHeading>
        <KPParagraph className="text-zinc-300">
          Exciting news! Our Investor Portal is coming soon, designed to
          revolutionize your investment journey. View your investments, track
          profits, and enjoy a seamless experience – all at your fingertips.
          Stay tuned for the launch and gear up for a more empowered approach to
          financial success. Get ready to elevate your investment game!
        </KPParagraph>
      </KPRow>
    </div>
  );
}

export default InvestorsPortalTeaser;
