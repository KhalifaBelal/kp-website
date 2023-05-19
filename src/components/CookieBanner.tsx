"use client";

import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import { useState, useEffect } from "react";
import { KPButton, kpButtonVariants } from "@/ui/KPButton";
import Link from "next/link";
import KPParagraph from "./ui/KPParagraph";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<boolean>(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);

    console.log("Cookie Consent: ", cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={`my-3 mx-auto max-w-xs
                        fixed bottom-0 left-0 right-0 md:bottom-6 md:left-6 md:right-auto
                        ${
                          cookieConsent != null ? "hidden" : "flex"
                        } p-3 md:p-5 justify-between items-center flex-col gap-5 bg-zinc-100
                        dark:bg-zinc-900 rounded-lg shadow z-[9999] border border-zinc-900 dark:border-zinc-100`}
    >
      <div className="text-center">
        <KPParagraph className="text-zinc-900 dark:text-zinc-100">
          We use cookies on our site.
        </KPParagraph>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <KPButton
            className={kpButtonVariants({ variant: "outline" })}
            onClick={() => setCookieConsent(false)}
          >
            Decline
          </KPButton>
          <KPButton
            className={kpButtonVariants({ variant: "outline" })}
            onClick={() => setCookieConsent(true)}
          >
            Allow Cookies
          </KPButton>
        </div>
        <Link
          className={kpButtonVariants({ variant: "ghost" }) + "w-full"}
          href="/privacy-policy"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
