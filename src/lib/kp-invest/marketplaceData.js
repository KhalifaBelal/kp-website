import Icons from "@/components/Icons";

export const marketplaceData = [
  {
    title: "Supermarket Chain",
    minimumInvestment: "20.000€",
    investmentType: "Passive Income",
    return: "33% ROI (per year)",
    payout: "Monthly",
    duration: "6 years",
    icon: (
      <Icons.BrainIcon
        className="bg-kp-red p-2 rounded-lg z-50"
        size={40}
        color="white"
      />
    ),
  },
  {
    title: "Restaurant Chain",
    minimumInvestment: "20.000€",
    investmentType: "Passive Income",
    return: "33% ROI (per year)",
    payout: "Monthly",
    duration: "6 years",
    icon: (
      <Icons.Wine
        className="bg-kp-red p-2 rounded-lg z-50"
        size={40}
        color="white"
      />
    ),
  },
  {
    title: "Real Estate Flipping",
    investmentTarget: "160.000€",
    minimumInvestment: "10.000€",
    investmentType: "Yearly Payout",
    return: "40% ROI (per year)",
    payout: "yearly",
    icon: (
      <Icons.HomeIcon
        className="bg-kp-red p-2 rounded-lg z-50"
        size={40}
        color="white"
      />
    ),
  },
  {
    title: "E-Commerce Business",
    investmentTarget: "225.000€",
    minimumInvestment: "10.000€",
    investmentType: "Active",
    return: "90%",
    payout: "After 3 Years",
    icon: (
      <Icons.KeyIcon
        className="bg-kp-red p-2 rounded-lg z-50"
        size={40}
        color="white"
      />
    ),
  },
];
