import { FC, HTMLAttributes } from "react";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";

interface ContactApproachProps extends HTMLAttributes<HTMLElement> {}

const ContactApproach: FC<ContactApproachProps> = ({ children }) => {
  return (
    <KPRow flexDirection="default" className="py-32">
      <KPHeading>
        People <span className="text-kp-red">First</span>. Business Lasts.
      </KPHeading>
      {children}
    </KPRow>
  );
};

export default ContactApproach;
