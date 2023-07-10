import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPParagraph from "@/components/ui/KPParagraph";

function Community() {
  return (
    <KPRow flexDirection="col" alignItems="start">
      <KPHeading textColor="black">Join Our Community</KPHeading>
      <KPHeading textColor="black" size="sm">
        Fuel Your Entrepreneurial Journey
      </KPHeading>
      <KPParagraph textColor="black">
        <span className="font-semibold">
          Ready to take the next step? Join the Khalifa Partners community and:
        </span>
        <br />
        Gain access to our diverse network of investors actively seeking
        opportunities Receive expert guidance and mentorship throughout the
        funding process Design a funding strategy that aligns with your business
        goals
      </KPParagraph>
    </KPRow>
  );
}

export default Community;
