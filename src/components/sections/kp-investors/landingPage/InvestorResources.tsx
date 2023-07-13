import { KPButton, kpButtonVariants } from "@/components/ui/KPButton";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/KPCard";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";
import Image from "next/image";

function InvestorResources() {
  return (
    <div className="w-full py-20 bg-zinc-100" id="investor-resources">
      <KPRow flexDirection="col" alignItems="start">
        <KPHeading className="text-black">Investor Resources</KPHeading>
        <KPRow
          wrapperContainer="disable"
          flexDirection="col"
          alignItems="start"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
            <Card className="relative">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <KPRow wrapperContainer="disable">
                  <CardTitle className="text-sm font-medium">
                    Artikel
                  </CardTitle>
                  <KPButton
                    className={
                      (kpButtonVariants({
                        variant: "link",
                      }),
                      "text-slate-700 w-full")
                    }
                  >
                    Aufruf zu Aktion
                  </KPButton>
                </KPRow>
              </CardHeader>
              <CardContent className="p-0">
                <Image
                  priority
                  quality={100}
                  src="/logos/salespects-logo.png"
                  alt="salespects-logo"
                  typeof="image"
                  rel="preload"
                  unoptimized={false}
                  width={1500}
                  height={1500}
                />
              </CardContent>
            </Card>
            <Card className="relative">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <KPRow wrapperContainer="disable">
                  <CardTitle className="text-sm font-medium">
                    Artikel
                  </CardTitle>
                  <KPButton
                    className={
                      (kpButtonVariants({
                        variant: "link",
                      }),
                      "text-slate-700 w-full")
                    }
                  >
                    Aufruf zu Aktion
                  </KPButton>
                </KPRow>
              </CardHeader>
              <CardContent className="p-0">
                <Image
                  priority
                  quality={100}
                  src="/logos/salespects-logo.png"
                  alt="salespects-logo"
                  typeof="image"
                  rel="preload"
                  unoptimized={false}
                  width={1500}
                  height={1500}
                />
              </CardContent>
            </Card>
            <Card className="relative">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <KPRow wrapperContainer="disable">
                  <CardTitle className="text-sm font-medium">
                    Artikel
                  </CardTitle>
                  <KPButton
                    className={
                      (kpButtonVariants({
                        variant: "link",
                      }),
                      "text-slate-700 w-full")
                    }
                  >
                    Aufruf zu Aktion
                  </KPButton>
                </KPRow>
              </CardHeader>
              <CardContent className="p-0">
                <Image
                  priority
                  quality={100}
                  src="/logos/salespects-logo.png"
                  alt="salespects-logo"
                  typeof="image"
                  rel="preload"
                  unoptimized={false}
                  width={1500}
                  height={1500}
                />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
            <Card className="relative">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <KPRow wrapperContainer="disable">
                  <CardTitle className="text-sm font-medium">
                    Artikel
                  </CardTitle>
                  <KPButton
                    className={
                      (kpButtonVariants({
                        variant: "link",
                      }),
                      "text-slate-700 w-full")
                    }
                  >
                    Aufruf zu Aktion
                  </KPButton>
                </KPRow>
              </CardHeader>
              <CardContent className="p-0">
                <Image
                  priority
                  quality={100}
                  src="/logos/salespects-logo.png"
                  alt="salespects-logo"
                  typeof="image"
                  rel="preload"
                  unoptimized={false}
                  width={1500}
                  height={1500}
                />
              </CardContent>
            </Card>
            <Card className="relative">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <KPRow wrapperContainer="disable">
                  <CardTitle className="text-sm font-medium">
                    Artikel
                  </CardTitle>
                  <KPButton
                    className={
                      (kpButtonVariants({
                        variant: "link",
                      }),
                      "text-slate-700 w-full")
                    }
                  >
                    Aufruf zu Aktion
                  </KPButton>
                </KPRow>
              </CardHeader>
              <CardContent className="p-0">
                <Image
                  priority
                  quality={100}
                  src="/logos/salespects-logo.png"
                  alt="salespects-logo"
                  typeof="image"
                  rel="preload"
                  unoptimized={false}
                  width={1500}
                  height={1500}
                />
              </CardContent>
            </Card>
            <Card className="relative">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <KPRow wrapperContainer="disable">
                  <CardTitle className="text-sm font-medium">
                    Artikel
                  </CardTitle>
                  <KPButton
                    className={
                      (kpButtonVariants({
                        variant: "link",
                      }),
                      "text-slate-700 w-full")
                    }
                  >
                    Aufruf zu Aktion
                  </KPButton>
                </KPRow>
              </CardHeader>
              <CardContent className="p-0">
                <Image
                  priority
                  quality={100}
                  src="/logos/salespects-logo.png"
                  alt="salespects-logo"
                  typeof="image"
                  rel="preload"
                  unoptimized={false}
                  width={1500}
                  height={1500}
                />
              </CardContent>
            </Card>
          </div>
        </KPRow>
      </KPRow>
    </div>
  );
}

export default InvestorResources;
