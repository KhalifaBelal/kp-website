import Link from "next/link";
import Image from "next/image";
import { kpButtonVariants } from "@/ui/KPButton";
import KPParagraph from "@/ui/KPParagraph";

export default function Footer() {
  return (
    <div className="bg-black py-20 border-t border-kp-red flex items-center justify-between">
      <div className="container max-w-xl mx-auto w-full flex flex-col gap-10 justify-center items-center">
        <Image
          priority
          quality={100}
          typeof="image"
          rel="preload"
          unoptimized={false}
          width={40}
          height={40}
          src="/square.png"
          alt="kp-logo"
          className="aspect-square"
        />
        <KPParagraph className="text-zinc-300 text-center">
          <span className="font-bold">Khalifa Partners®</span>
          <br /> We diversify our Portfolio by building companies with
          outstanding personalities and supporting them with our know-how,
          network and capital.
        </KPParagraph>
        <div className="flex flex-col md:flex-row items-center gap-2 flex-1">
          <Link className={kpButtonVariants({ variant: "link" })} href="https://staging.khalifapartners.com/">
            Home
          </Link>
          <Link
            className={kpButtonVariants({ variant: "link" })}
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link
            className={kpButtonVariants({ variant: "link" })}
            href="/imprint"
          >
            Imprint
          </Link>
          <Link
            className={kpButtonVariants({ variant: "link" })}
            href="https://linktr.ee/baselkhalifa"
            rel="noreferrer"
            target="_blank"
          >
            Contact
          </Link>
          <Link
            className={kpButtonVariants({ variant: "link" })}
            href="/portfolio"
          >
            Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
