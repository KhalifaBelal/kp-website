import { KPButton, kpButtonVariants } from "@/components/ui/KPButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/KPCard";
import KPParagraph from "@/components/ui/KPParagraph";
import KPSection from "@/components/ui/KPSection";
import KPHeading from "@/ui/KPHeading";
import KPRow from "@/ui/KPRow";

function Marketplace() {
  return (
    <div className="w-full py-20 bg-zinc-100" id="marketplace">
      <KPRow flexDirection="col" alignItems="start">
        <KPHeading className="text-black">Marketplace</KPHeading>
        <KPRow
          wrapperContainer="disable"
          flexDirection="col"
          alignItems="start"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
            <Card className="relative">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  UNTERNEHMEN
                </CardTitle>
                <span className="bg-red-400 w-4 h-4 font-bold text-zinc-100 rounded-sm flex items-center justify-center p-4 absolute top-0 right-0">
                  P
                </span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Goal: 100.000$</div>
                <p className="text-xs text-muted-foreground">Return: 20.1%</p>
                <p className="text-xs text-muted-foreground">40% Progress</p>
              </CardContent>
              <KPButton
                className={kpButtonVariants({
                  variant: "subtle",
                  fullWidth: "enabled",
                  size: "sm",
                })}
              >
                Calculate
              </KPButton>
            </Card>
            <Card className="relative">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  UNTERNEHMEN
                </CardTitle>
                <span className="bg-red-400 w-4 h-4 font-bold text-zinc-100 rounded-sm flex items-center justify-center p-4 absolute top-0 right-0">
                  P
                </span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Goal: 100.000$</div>
                <p className="text-xs text-muted-foreground">Return: 180.1%</p>
                <p className="text-xs text-muted-foreground">40% Progress</p>
              </CardContent>
              <KPButton
                className={kpButtonVariants({
                  variant: "subtle",
                  fullWidth: "enabled",
                  size: "sm",
                })}
              >
                Check Availibility
              </KPButton>
            </Card>
            <Card className="relative">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  UNTERNEHMEN
                </CardTitle>
                <span className="bg-green-400 w-4 h-4 font-bold text-zinc-100 rounded-sm flex items-center justify-center p-4 absolute top-0 right-0">
                  A
                </span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Goal: 100.000$</div>
                <p className="text-xs text-muted-foreground">Return: 19%</p>
                <p className="text-xs text-muted-foreground">40% Progress</p>
              </CardContent>
              <KPButton
                className={kpButtonVariants({
                  variant: "subtle",
                  fullWidth: "enabled",
                  size: "sm",
                })}
              >
                Check Availibility
              </KPButton>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 w-full">
            <Card className="relative">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  UNTERNEHMEN
                </CardTitle>
                <span className="bg-red-400 w-4 h-4 font-bold text-zinc-100 rounded-sm flex items-center justify-center p-4 absolute top-0 right-0">
                  P
                </span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Goal: 100.000$</div>
                <p className="text-xs text-muted-foreground">Return: 20.1%</p>
                <p className="text-xs text-muted-foreground">40% Progress</p>
              </CardContent>
              <KPButton
                className={kpButtonVariants({
                  variant: "subtle",
                  fullWidth: "enabled",
                  size: "sm",
                })}
              >
                Check Availibility
              </KPButton>
            </Card>
            <Card className="relative">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  UNTERNEHMEN
                </CardTitle>
                <span className="bg-red-400 w-4 h-4 font-bold text-zinc-100 rounded-sm flex items-center justify-center p-4 absolute top-0 right-0">
                  P
                </span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Goal: 100.000$</div>
                <p className="text-xs text-muted-foreground">Return: 180.1%</p>
                <p className="text-xs text-muted-foreground">40% Progress</p>
              </CardContent>
              <KPButton
                className={kpButtonVariants({
                  variant: "subtle",
                  fullWidth: "enabled",
                  size: "sm",
                })}
              >
                Check Availibility
              </KPButton>
            </Card>
            <Card className="relative">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  UNTERNEHMEN
                </CardTitle>
                <span className="bg-green-400 w-4 h-4 font-bold text-zinc-100 rounded-sm flex items-center justify-center p-4 absolute top-0 right-0">
                  A
                </span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Goal: 100.000$</div>
                <p className="text-xs text-muted-foreground">Return: 19%</p>
                <p className="text-xs text-muted-foreground">40% Progress</p>
              </CardContent>
              <KPButton
                className={kpButtonVariants({
                  variant: "subtle",
                  fullWidth: "enabled",
                  size: "sm",
                })}
              >
                Check Availibility
              </KPButton>
            </Card>
            <Card className="relative">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  UNTERNEHMEN
                </CardTitle>
                <span className="bg-green-400 w-4 h-4 font-bold text-zinc-100 rounded-sm flex items-center justify-center p-4 absolute top-0 right-0">
                  A
                </span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Goal: 100.000$</div>
                <p className="text-xs text-muted-foreground">Return: 19%</p>
                <p className="text-xs text-muted-foreground">40% Progress</p>
              </CardContent>
              <KPButton
                className={kpButtonVariants({
                  variant: "subtle",
                  fullWidth: "enabled",
                  size: "sm",
                })}
              >
                Check Availibility
              </KPButton>
            </Card>
          </div>
        </KPRow>
      </KPRow>
    </div>
  );
}

export default Marketplace;
