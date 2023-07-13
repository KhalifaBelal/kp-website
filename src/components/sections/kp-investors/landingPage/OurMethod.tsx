import KPParagraph from "@/components/ui/KPParagraph";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";

function OurMethod() {
  return (
    <div className="w-full py-10 bg-zinc-900" id="our-method">
      <KPRow flexDirection="col" alignItems="end">
        <KPRow
          wrapperContainer="disable"
          flexDirection="col"
          alignItems="start"
        >
          <KPHeading>Our Method</KPHeading>
          <KPParagraph>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </KPParagraph>
        </KPRow>
      </KPRow>
    </div>
  );
}

export default OurMethod;
