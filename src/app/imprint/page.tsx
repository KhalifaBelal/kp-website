import KPHeading from "@/components/ui/KPHeading";
import { FC } from "react";
import KPSection from "@/components/ui/KPSection";
import KPRow from "@/components/ui/KPRow";
import KPParagraph from "@/components/ui/KPParagraph";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khalifa Partners | Imprint",
};

const page: FC = () => {
  return (
    <KPSection>
      <KPRow flexDirection="col" alignItems="start">
        <KPHeading>Impressum</KPHeading>

        <KPHeading size="sm">Angaben gem&auml;&szlig; &sect; 5 TMG</KPHeading>
        <KPParagraph>
          Basel Khalifa
          <br />
          Basel Khalifa e.K.
          <br />
          Bremerstra&szlig;e, 3<br />
          33613 Bielefeld
        </KPParagraph>

        <KPHeading size="sm">Kontakt</KPHeading>
        <KPParagraph>
          Telefon: 017631173539
          <br />
          E-Mail: kontakt@khalifapartners.com
        </KPParagraph>

        <KPHeading size="sm">Umsatzsteuer-ID</KPHeading>
        <KPParagraph>
          Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
          Umsatzsteuergesetz:
          <br />
          DE356114248
        </KPParagraph>

        <KPHeading size="sm">EU-Streitschlichtung</KPHeading>
        <KPParagraph>
          Die Europ&auml;ische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <Link
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </Link>
          .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </KPParagraph>

        <KPHeading size="sm">
          Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
        </KPHeading>
        <KPParagraph>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </KPParagraph>
      </KPRow>
    </KPSection>
  );
};

export default page;
