import Pyramid from "@/components/glb-models/Pyramid";
import KPParagraph from "@/components/ui/KPParagraph";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";

function OurMethod() {
  return (
    <div className="w-full py-10 bg-zinc-900" id="our-method">
      <KPRow>
        <KPRow
          wrapperContainer="disable"
          flexDirection="col"
          alignItems="start"
        >
          <KPHeading>Our Method</KPHeading>
          <KPHeading size="sm" fontWeight="normal">
            Welcome to Khalifa Partners - Where Innovation Meets Investment!
          </KPHeading>
          <KPParagraph>
            At Khalifa Partners, we redefine the investment landscape by pooling
            resources and funding opportunities collectively. Our unique selling
            proposition (USP) lies in empowering small investors to join forces,
            making it easier to gather substantial funds for exceptional
            ventures.
            <br />
            <br />
            With us, you have the chance to invest alongside others, leveling
            the playing field. No longer limited by individual financial
            capacity, you can now access the same profitable opportunities as
            larger investors.
            <br />
            <br />
            Our marketplace showcases carefully studied and validated ventures,
            providing a secure path to remarkable returns. Calculate your
            profits beforehand, choose the investment product that suits you
            best, and join forces with like-minded investors.
          </KPParagraph>
        </KPRow>
        <div className="relative w-full aspect-square">
          <Pyramid />
        </div>
      </KPRow>
    </div>
  );
}

export default OurMethod;
