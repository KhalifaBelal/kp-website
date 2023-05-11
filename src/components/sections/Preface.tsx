import Link from "next/link";
import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPSection from "@/ui/KPSection";
import KPParagraph from "../ui/KPParagraph";

interface PrefaceProps {
  title: string;
  text: string;
}

function Preface({ title, text }: PrefaceProps) {
  return (
    <KPSection>
      <KPRow
        variant="intro"
        flexDirection="col"
      >
        <KPHeading size="default" className="text-black dark:text-white">
          {title}
        </KPHeading>
        <KPHeading size="sm" fontWeight="normal">
          {text}
        </KPHeading>
      </KPRow>
    </KPSection>
  );
}

export default Preface;
