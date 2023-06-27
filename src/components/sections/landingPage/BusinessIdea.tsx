import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPParagraph from "@/ui/KPParagraph";
import Pyramid from "@/components/glb-models/Pyramid";
import KPSection from "@/ui/KPSection";

function BusinessIdea() {
  return (
    <KPSection id="concept" itemID="concept">
      <KPRow>
        <KPRow
          wrapperContainer="disable"
          flexDirection="col"
          alignItems="start"
        >
          <KPHeading className="text-white">
            We validate your Business Idea
          </KPHeading>
          <KPParagraph>
            Do you have a brilliant business idea that you're eager to bring to
            life? We're here to help you turn that idea into a reality. Our
            experienced team at Khalifa Partners specializes in validating
            business ideas, providing the necessary guidance and support to
            ensure their success. Whether you're in the early stages of
            conceptualization or seeking validation for an existing idea, we
            have the expertise to help you navigate the process. Let us be your
            trusted partner in validating your business idea and turning it into
            a thriving venture. Get in touch with us today and let's embark on
            this exciting journey together.
          </KPParagraph>
        </KPRow>
      </KPRow>
    </KPSection>
  );
}

export default BusinessIdea;
