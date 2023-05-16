"use client";

import Link from "next/link";

import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import { useState, useEffect } from "react";
import { KPButton, kpButtonVariants } from "@/ui/KPButton";
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
      className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        ${
                          cookieConsent != null ? "hidden" : "flex"
                        } px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-zinc-900 dark:bg-zinc-100 rounded-lg shadow z-[9999]`}
    >
      <div className="text-center">
        <Link
          href="/info/cookies"
          className={kpButtonVariants({ variant: "link" })}
        >
          <span className="text-slate-100 dark:text-slate-900">
            We use <span className="font-bold text-kp-red">cookies</span> on our
            site.
          </span>
        </Link>
      </div>

      <div className="flex gap-2">
        <KPButton
          className={kpButtonVariants({ variant: "link" })}
          onClick={() => setCookieConsent(false)}
        >
          <span className="text-zinc-100 dark:text-zinc-900">Decline</span>
        </KPButton>
        <KPButton
          className={kpButtonVariants({ variant: "outline" })}
          onClick={() => setCookieConsent(true)}
        >
          Allow Cookies
        </KPButton>
      </div>
    </div>
  );
}
