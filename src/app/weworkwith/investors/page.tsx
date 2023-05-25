import InvestIntro from "@/components/sections/investors/InvestIntro";
import WhyInvest from "@/components/sections/investors/WhyInvest";
import HowToInvest from "@/components/sections/investors/HowToInvest";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Investors",
  description: "Coming soon...",
};

export default function page() {
  return (
    <div>
      <InvestIntro />
      <WhyInvest />
      <HowToInvest />
      {/* <KPParagraph>
        Our dedicated portfolio managers will provide regular updates,
        performance reports, and insights on your investments, ensuring you have
        a clear understanding of your portfolio's progress. We'll also be
        available to address any questions or concerns you may have, offering
        strategic advice and guidance to optimize your investment portfolio.
      </KPParagraph>
      <KPParagraph>
        Beyond portfolio management, we foster a collaborative and transparent
        relationship with our investors. We regularly organize investor events,
        webinars, and networking opportunities, giving you the chance to connect
        with other like-minded investors and industry professionals. This
        community enables you to stay informed, exchange ideas, and explore
        additional investment opportunities.
      </KPParagraph>
      <KPParagraph>
        <span className="font-semibold">Invest with Confidence:</span> By
        following our three-step investment plan, you can invest with
        confidence, knowing that you have a trusted partner by your side. We're
        committed to providing exceptional service, comprehensive support, and
        access to a world of investment possibilities. Let us help you navigate
        the investment landscape, maximize your returns, and achieve your
        financial goals.
      </KPParagraph>
      <KPParagraph>
        Contact us today to begin your investment journey with Khalifa Partners.
        Together, we'll embark on a path of strategic investment, unlocking the
        potential of transformative ventures and creating a brighter future.
      </KPParagraph> */}
    </div>
  );
}
