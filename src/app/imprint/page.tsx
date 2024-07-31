import KPHeading from "@/components/ui/KPHeading";
import KPSection from "@/components/ui/KPSection";
import KPRow from "@/components/ui/KPRow";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint",
};

export default function page() {
  return (
    <KPSection className='text-white'>
      <KPRow flexDirection="col" alignItems="start">
        <KPHeading>Impressum</KPHeading>

        <KPHeading size="sm">Angaben gem&auml;&szlig; &sect; 5 TMG</KPHeading>
        <p>
          Basel Khalifa
          <br />
          Basel Khalifa e.K.
          <br />
          Bremerstra&szlig;e, 3<br />
          33613 Bielefeld
        </p>

        <KPHeading size="sm">Kontakt</KPHeading>
        <p>
          Telefon: 017631173539
          <br />
          E-Mail: kontakt@khalifapartners.com
        </p>

        <KPHeading size="sm">Umsatzsteuer-ID</KPHeading>
        <p>
          Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
          Umsatzsteuergesetz:
          <br />
          DE356114248
        </p>

        <KPHeading size="sm">EU-Streitschlichtung</KPHeading>
        <p>
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
        </p>

        <KPHeading size="sm">
          Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
        </KPHeading>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </KPRow>
    </KPSection>
  );
};
