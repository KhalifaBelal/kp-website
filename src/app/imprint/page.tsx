import KPHeading from "@/components/ui/KPHeading";
import KPSection from "@/components/ui/KPSection";
import KPRow from "@/components/ui/KPRow";
import KPParagraph from "@/components/ui/KPParagraph";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint",
};

export default function page() {
  return (
    <KPSection className="text-black">
      <KPRow flexDirection="col" alignItems="start" className="text-black">
        <KPHeading className="text-black">Impressum</KPHeading>

        <KPHeading className="text-black" size="sm">Angaben gem&auml;&szlig; &sect; 5 TMG</KPHeading>
        <KPParagraph className="text-black">
          Basel Khalifa
          <br />
          Basel Khalifa e.K.
          <br />
          Bremerstra&szlig;e, 3<br />
          33613 Bielefeld
        </KPParagraph>

        <KPHeading className="text-black" size="sm">Kontakt</KPHeading>
        <KPParagraph className="text-black">
          Telefon: 017631173539
          <br />
          E-Mail: kontakt@khalifapartners.com
        </KPParagraph>

        <KPHeading className="text-black" size="sm">Umsatzsteuer-ID</KPHeading>
        <KPParagraph className="text-black">
          Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
          Umsatzsteuergesetz:
          <br />
          DE356114248
        </KPParagraph>

        <KPHeading className="text-black" size="sm">EU-Streitschlichtung</KPHeading>
        <KPParagraph className="text-black">
          Die Europ&auml;ische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <Link
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-kp-red"
          >
            https://ec.europa.eu/consumers/odr/
          </Link>
          .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </KPParagraph>

        <KPHeading size="sm" className="text-black">
          Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
        </KPHeading>
        <KPParagraph className="text-black">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </KPParagraph>
      </KPRow>
    </KPSection>
  );
};
