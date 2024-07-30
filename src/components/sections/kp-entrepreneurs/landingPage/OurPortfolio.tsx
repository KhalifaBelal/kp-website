import KPHeading from "@/components/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import KPParagraph from "@/ui/KPParagraph";
import KPSection from "@/ui/KPSection";
import Link from "next/link";
import { kpButtonVariants } from "@/ui/KPButton";
import Image, { ImageProps } from 'next/image';
import { ExternalLinkIcon, RocketIcon, TimerIcon } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

function OurPortfolio() {
  return (
    <KPSection id="portfolio">
      <KPRow flexDirection="col" className="text-center">
        <KPHeading className="text-white">Our Portfolio</KPHeading>
        <KPParagraph>
          Explore the current projects we are working on
        </KPParagraph>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {PORTFOLIO_DATA.map((i, key) =>
            <div key={key} className='relative flex flex-col items-start gap-6 p-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-all duration-200'>
              <Badge variant={"default"}>{i.companyState === "Currently Building" ? <TimerIcon size={14} className='mr-1' /> : <RocketIcon size={14} className='mr-1' />} {i.companyState}</Badge>
              <Image src={i.image.src} alt={i.image.alt} width={320} height={320} className='rounded-md' />
              <div className='flex flex-col gap-3 p-2'>
                <KPHeading size={"sm"} className="text-white text-left">{i.name}</KPHeading>
                <KPParagraph className='text-left' size={"sm"}>
                  {i.description}
                </KPParagraph>
                {i.website && <Link href={i.website} target='_blank' className={kpButtonVariants()}>{i.cta} <ExternalLinkIcon size={14} /></Link>}
              </div>
            </div>
          )}
        </div>
      </KPRow>
    </KPSection>
  );
}

export default OurPortfolio;

const PORTFOLIO_DATA: {
  name: string;
  description: string;
  twColor: string;
  companyState: string;
  image: {
    src: string;
    alt: string;
  },
  cta?: string;
  website?: string;
}[] = [
    {
      name: "Salespects",
      description: "  Salespects is a SaaS solution and the first CRM system exclusively for financial advisors in Germany. Targeting a market of over 300,000 potential clients, Salespects has been in development for over two years and is set to launch in Q4 of 2024.",
      twColor: "",
      companyState: "Currently Building",
      image: {
        src: "/logos/salespects-logo.png",
        alt: "salespects-logo"
      }
    },
    {
      name: "MyPerfectStay",
      description: "  MyPerfectStay is an AI-based mobile application designed to tailor the perfect vacation for tourists around the world. Featuring over 300,000 activities and a unique AI algorithm, this innovative app allows tourists to not only plan but also book their activities at their preferred destination. MyPerfectStay will launch in Q4 of 2024.",
      twColor: "",
      companyState: "Currently Building",
      image: {
        src: "/logos/salespects-logo.png",
        alt: "salespects-logo"
      }
    },
    {
      name: "Clartus",
      description: "Clartus is our business consultancy dedicated to helping 7-8 figure companies generate more growth through data-driven marketing strategies. We specialize in Meta Ads, Google Ads, SEO, UX Design, and Software Development. Based in the UAE, Clartus serves clients in the UAE, Germany, and Egypt.",
      twColor: "",
      companyState: "Launched",
      website: "http://clartus.com",
      cta: "clartus.com",
      image: {
        src: "/logos/salespects-logo.png",
        alt: "salespects-logo"
      }
    },
    {
      name: "CloudCops",
      description: "Launched in Germany and currently expanding into the UAE market, CloudCops consults big enterprises and startups in the fields of DevOps, Cloud Infrastructure, and Software Development.",
      twColor: "",
      companyState: "Launched",
      website: "http://cloudcops.de",
      cta: "cloudcops.de",
      image: {
        src: "/logos/salespects-logo.png",
        alt: "salespects-logo"
      }
    },
    {
      name: "SmartinCulture",
      description: "SmartinCulture helps 8-figure entrepreneurs and established companies from the DACH Region (Germany, Austria, and Switzerland) expand into the UAE and Saudi markets. We open doors to new customers and partners, set up the local business with the right legal foundation, and assist with operational tasks such as Sales, Marketing, and HR.",
      twColor: "",
      companyState: "Launched",
      website: "http://smartinculture.com",
      cta: "smartinculture.com",
      image: {
        src: "/logos/salespects-logo.png",
        alt: "salespects-logo"
      }
    },
    {
      name: "EmergingExperts",
      description: "  EmergingExperts is our recruiting company based in Egypt, dedicated to attracting the top 1% of talent in the fields of Software Development and Graphic Design. We connect this elite talent with work opportunities that are not available in the national market.",
      twColor: "",
      companyState: "Launched",
      website: "http://emergingexperts.com",
      cta: "emergingexperts.com",
      image: {
        src: "/logos/salespects-logo.png",
        alt: "salespects-logo"
      }
    },
    {
      name: "CodeNatura",
      description: "CodeNatura is an international e-commerce brand focusing on natural supplements like Himalayan Shilajit. With thousands of loyal customers, we are committed to providing the best product quality on the market.",
      twColor: "",
      companyState: "Launched",
      website: "http://codenatura.com",
      cta: "http://codenatura.com",
      image: {
        src: "/logos/salespects-logo.png",
        alt: "salespects-logo"
      }
    }
  ]