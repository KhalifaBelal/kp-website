import Link from "next/link";
import { kpButtonVariants } from "./ui/KPButton";

export default function SubNavbar() {
  return (
    <div className="fixed backdrop-blur-sm bg-zinc-900 z-50 top-0 left-0 right-0 h-20 border-b border-zinc-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-6xl mx-auto w-full flex justify-between items-center">
        <Link className={kpButtonVariants({ variant: "link" })} href="/kp-entrepreneurs" replace>
          Khalifa Partners | Home
        </Link>
      </div>
    </div>
  );
}
