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
          <KPHeading>
            Our Unique Concept <br /> - Power of Shared Prosperity
          </KPHeading>
          <KPParagraph>
            At the heart of Khalifa Group&apos;s business model lies the concept of
            shared prosperity. We firmly believe that by fostering a strong
            network of investors who fund our companies, we can magnify the
            success of individual projects within the organization. This
            approach ensures that as the company flourishes, so do the investors
            who contribute to its growth.
            <br />
            <br />
            Our team works tirelessly to identify lucrative investment
            opportunities across various industries. We diligently allocate the
            funds received from our valued investors to these projects, allowing
            them to flourish and yield handsome returns. By sharing the profits
            with our investors, we forge a symbiotic relationship, where the
            success of one leads to the triumph of all.
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
