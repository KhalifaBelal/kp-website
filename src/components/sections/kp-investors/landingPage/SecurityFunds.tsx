import { kpButtonVariants } from "@/components/ui/KPButton";
import KPParagraph from "@/components/ui/KPParagraph";
import KPSection from "@/components/ui/KPSection";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import Link from "next/link";

function SecurityFund() {
  return (
    <KPSection>
      <KPRow flexDirection="col" alignItems="start">
        <KPHeading className="text-black">
          Invest with Confidence - <br /> Our Security Fund Guarantees Your
          Peace of Mind
        </KPHeading>
        <KPParagraph className="text-zinc-700">
          At Khalifa Partners, we prioritize your trust and satisfaction above
          all else. We understand that investing can be accompanied by
          uncertainties, which is why we offer an added layer of protection
          through our Security Fund.
          <br />
          <br />
          With our Security Fund in place, you can invest with complete peace of
          mind. In the rare event that an investment does not meet its expected
          results, we guarantee to refund your entire investment amount. This
          commitment ensures that you face no financial risk, giving you the
          freedom to explore investment opportunities with confidence.
          <br />
          <br />
          Our Security Fund represents our unwavering dedication to your
          financial well-being. We stand by our promise to protect your
          interests and deliver a secure and rewarding investment experience.
          Invest with us, knowing that your future is safeguarded by our
          commitment to excellence and the strength of our Security Fund.
        </KPParagraph>
      </KPRow>
    </KPSection>
  );
}

export default SecurityFund;
