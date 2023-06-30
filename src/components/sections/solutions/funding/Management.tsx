import Image from "next/image";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPSection from "@/ui/KPSection";
import KPParagraph from "@/components/ui/KPParagraph";

function Management() {
  return (
    <KPSection className="bg-zinc-100">
      <KPRow flexDirection="col" alignItems="start">
        <KPHeading textColor="black">Focus on What Matters</KPHeading>
        <KPHeading textColor="black" size="sm">
          Shared Company Management
        </KPHeading>
        <KPParagraph textColor="black">
          Imagine managing your shared company without the burden of financing.
          With Khalifa Partners, you can concentrate on strategic aspects while
          we handle the financial side. Take advantage of shared company
          management and unleash your venture&apos;s true potential.
        </KPParagraph>
      </KPRow>
    </KPSection>
  );
}

export default Management;
